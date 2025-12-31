import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const repoRoot = path.resolve(process.cwd());
const appRoot = path.join(repoRoot, 'my-hotel-project');

function gitPaths() {
  const out = execSync('git ls-tree -r --name-only HEAD', { encoding: 'utf8' });
  return out.split(/\r?\n/).filter(Boolean);
}

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

function normalizeSlashes(p) {
  return p.replace(/\\/g, '/');
}

function isProbablyPackage(spec) {
  return !(spec.startsWith('.') || spec.startsWith('/') || spec.startsWith('@/'));
}

function stripQueryHash(spec) {
  const q = spec.split('?')[0];
  return q.split('#')[0];
}

function candidatesForImport(resolvedBase) {
  // resolvedBase: absolute path without extension sometimes
  const exts = ['.ts', '.tsx', '.mts', '.js', '.jsx', '.mjs', '.cjs', '.json'];
  const cands = [];

  // If it already has an extension
  if (path.extname(resolvedBase)) {
    cands.push(resolvedBase);
    return cands;
  }

  for (const ext of exts) cands.push(resolvedBase + ext);
  for (const ext of exts) cands.push(path.join(resolvedBase, 'index' + ext));

  return cands;
}

function findGitExactPath(gitSetLowerToExact, relPath) {
  const rel = normalizeSlashes(relPath);
  const lower = rel.toLowerCase();
  const exact = gitSetLowerToExact.get(lower);
  return exact ?? null;
}

function buildLowerToExactMap(paths) {
  const map = new Map();
  for (const p of paths) {
    const k = p.toLowerCase();
    // If duplicates differ only by case, keep the first but record later via collisions.
    if (!map.has(k)) map.set(k, p);
  }
  return map;
}

function collectImportSpecifiers(sourceText) {
  // Covers:
  // import ... from 'x'
  // export ... from 'x'
  // import('x')
  // require('x')
  const specs = [];
  const patterns = [
    /\bimport\s+[^;\n]*?\sfrom\s*["']([^"']+)["']/g,
    /\bexport\s+[^;\n]*?\sfrom\s*["']([^"']+)["']/g,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
    /\brequire\s*\(\s*["']([^"']+)["']\s*\)/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(sourceText)) !== null) {
      specs.push(m[1]);
    }
  }
  return specs;
}

function collectPublicAssetRefs(sourceText) {
  // Very targeted: only check obvious absolute public asset refs.
  const refs = [];
  const re = /(["'`])\/(images|icons)\/[^\1\s)]+\1/g;
  let m;
  while ((m = re.exec(sourceText)) !== null) {
    // m[0] includes quotes; m[2] is images|icons; strip leading/trailing quote.
    const raw = m[0];
    const quote = raw[0];
    const val = raw.slice(1, raw.lastIndexOf(quote));
    refs.push(val);
  }
  return refs;
}

function main() {
  if (!fs.existsSync(appRoot)) {
    console.error('Expected my-hotel-project folder not found:', appRoot);
    process.exit(2);
  }

  const paths = gitPaths();
  const lowerToExact = buildLowerToExactMap(paths);

  // Detect collisions in git (two files differing only by case). This breaks on Windows and is a red flag.
  const collisions = new Map();
  for (const p of paths) {
    const k = p.toLowerCase();
    const list = collisions.get(k) ?? [];
    list.push(p);
    collisions.set(k, list);
  }
  const collisionList = [...collisions.entries()].filter(([, v]) => v.length > 1);

  const sourceFiles = paths.filter((p) =>
    p.startsWith('my-hotel-project/') &&
    (p.endsWith('.ts') || p.endsWith('.tsx') || p.endsWith('.mts') || p.endsWith('.js') || p.endsWith('.jsx') || p.endsWith('.mjs') || p.endsWith('.cjs'))
  );

  const issues = [];
  let importsChecked = 0;
  let assetsChecked = 0;

  for (const relFile of sourceFiles) {
    const absFile = path.join(repoRoot, relFile);
    const text = readText(absFile);
    if (!text) continue;

    const dirAbs = path.dirname(absFile);
    const dirRel = path.posix.dirname(relFile);

    // Import checks
    for (const specRaw of collectImportSpecifiers(text)) {
      const spec = stripQueryHash(specRaw);
      if (isProbablyPackage(spec)) continue;

      importsChecked++;

      let resolvedAbs;
      if (spec.startsWith('@/')) {
        // @/* maps to my-hotel-project/*
        resolvedAbs = path.join(appRoot, spec.slice(2));
      } else if (spec.startsWith('./') || spec.startsWith('../')) {
        resolvedAbs = path.resolve(dirAbs, spec);
      } else {
        // Absolute from repo root (rare) - treat as repo-root relative
        resolvedAbs = path.join(repoRoot, spec.replace(/^\//, ''));
      }

      // Convert resolvedAbs to repo-relative with forward slashes
      const resolvedRelBase = normalizeSlashes(path.relative(repoRoot, resolvedAbs));

      const candRels = candidatesForImport(path.join(repoRoot, resolvedRelBase)).map((p) => normalizeSlashes(path.relative(repoRoot, p)));

      let foundExact = null;
      let foundAnyLower = null;
      for (const cand of candRels) {
        const exact = findGitExactPath(lowerToExact, cand);
        if (exact) {
          foundAnyLower = exact;
          if (exact === cand) {
            foundExact = exact;
            break;
          }
        }
      }

      if (!foundAnyLower) {
        // This could be a type-only path or virtual module; still worth reporting as missing.
        issues.push({
          type: 'missing-import-target',
          from: relFile,
          spec: specRaw,
          resolvedAttempt: candRels.slice(0, 6),
        });
      } else if (!foundExact) {
        issues.push({
          type: 'case-mismatch-import',
          from: relFile,
          spec: specRaw,
          expected: foundAnyLower,
        });
      }
    }

    // Public asset checks
    for (const ref of collectPublicAssetRefs(text)) {
      // ref like /images/hero.jpg
      assetsChecked++;
      const decoded = decodeURIComponent(ref); // handles %20
      const publicRel = normalizeSlashes(path.join('my-hotel-project/public', decoded.replace(/^\//, '')));
      const exact = findGitExactPath(lowerToExact, publicRel);
      if (!exact) {
        issues.push({
          type: 'missing-public-asset',
          from: relFile,
          asset: ref,
          expectedPath: publicRel,
        });
      } else if (exact !== publicRel) {
        issues.push({
          type: 'case-mismatch-public-asset',
          from: relFile,
          asset: ref,
          expected: exact,
        });
      }
    }
  }

  const summary = {
    trackedPaths: paths.length,
    sourceFiles: sourceFiles.length,
    importsChecked,
    assetsChecked,
    caseCollisionsInGit: collisionList.length,
    issues: issues.length,
  };

  console.log('Case audit summary:', JSON.stringify(summary, null, 2));

  if (collisionList.length) {
    console.log('\nCase-colliding paths in git (breaks on case-insensitive filesystems):');
    for (const [, v] of collisionList) {
      console.log(' -', v.join('  |  '));
    }
  }

  if (issues.length) {
    console.log('\nIssues:');
    for (const it of issues) {
      if (it.type === 'case-mismatch-import') {
        console.log(`- [case-mismatch-import] ${it.from} imports "${it.spec}" but git path is "${it.expected}"`);
      } else if (it.type === 'missing-import-target') {
        console.log(`- [missing-import-target] ${it.from} imports "${it.spec}" but no matching file found. Tried: ${it.resolvedAttempt.join(', ')}`);
      } else if (it.type === 'missing-public-asset') {
        console.log(`- [missing-public-asset] ${it.from} references "${it.asset}" but not found at "${it.expectedPath}"`);
      } else if (it.type === 'case-mismatch-public-asset') {
        console.log(`- [case-mismatch-public-asset] ${it.from} references "${it.asset}" but git path is "${it.expected}"`);
      } else {
        console.log(`- [${it.type}]`, it);
      }
    }
    process.exitCode = 1;
  }
}

main();
