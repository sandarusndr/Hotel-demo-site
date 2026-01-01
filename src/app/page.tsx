import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgePercent,
  CalendarCheck,
  Headphones,
  ShieldCheck,
  Users,
} from "lucide-react";

import { rooms } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* --- HERO SECTION: Spotlight Effect & Text Generate Style --- */}
      <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden text-center py-20 sm:py-24">
        {/* Background Photo + Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Grand Stay Hotel"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-black/20 to-black" />
        </div>
        
        {/* Content */}
        <div className="z-10 px-4 max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm mb-4">
             <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">Now Open for 2026 Season</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/15 ">
            The Grand Stay
          </h1>
          
          <p className="text-lg md:text-xl  text-zinc-400  max-w-2xl mx-auto leading-relaxed">
            Where modern architecture meets timeless comfort. Experience the art of living well in the heart of the city.
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/rooms" className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
                Book Your Stay
              </span>
            </Link>
            
            <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
              Contact Concierge <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* --- BENTO GRID: Featured Rooms + Guest Promise --- */}
      <section className="px-4 md:px-10 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-3xl font-serif  font-bold mb-2">Featured Rooms</h2>
          <p className="text-zinc-400">Handpicked stays, plus our guest-first promise.</p>
        </div>

        {(() => {
          const featured = rooms.filter((r) => r.featured).slice(0, 2);
          const primary = featured[0] ?? rooms[0];
          const secondary = featured[1] ?? rooms[1];

          if (!primary || !secondary) return null;

          return (
            <>
              {/* The Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-auto lg:h-[600px]">
                {/* Large Room Feature (Span 2 cols, 2 rows) */}
                <Link
                  href={`/rooms/${primary.slug}`}
                  className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-end"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
                  <Image
                    src={primary.imageUrl}
                    alt={primary.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-20 space-y-2">
                    <p className="text-xs font-semibold tracking-wider text-yellow-500 uppercase">Signature stay</p>
                    <h3 className="text-2xl font-bold text-white">{primary.name}</h3>
                    <p className="text-zinc-300 text-sm line-clamp-2">{primary.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-sm text-white/90">
                        <span className="font-semibold">{formatCurrency(primary.price)}</span>
                        <span className="text-white/60"> / night</span>
                      </p>
                      <span className="text-sm text-white/80 inline-flex items-center gap-2">
                        View details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Small Room Feature */}
                <Link
                  href={`/rooms/${secondary.slug}`}
                  className="group lg:col-span-2 lg:row-span-1 relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex items-center gap-5 hover:bg-zinc-800/60 transition-colors"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative shrink-0">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                      <Image
                        src={secondary.imageUrl}
                        alt={secondary.name}
                        fill
                        sizes="80px"
                        className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <p className="text-[11px] font-semibold tracking-wider text-yellow-500 uppercase">Featured room</p>
                    <h3 className="mt-1 font-bold text-xl leading-tight truncate">{secondary.name}</h3>
                    <p className="mt-1 text-zinc-400 text-sm line-clamp-1">{secondary.description}</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="text-sm text-white/90">
                        <span className="font-semibold">{formatCurrency(secondary.price)}</span>
                        <span className="text-white/60"> / night</span>
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors group-hover:text-white">
                        View <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Guest Promise (Span 2 cols) */}
                <div className="lg:col-span-2 lg:row-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-row items-center gap-6 hover:bg-zinc-800 transition-colors">
                  <div className="bg-yellow-500/10 p-4 rounded-full">
                    <BadgePercent className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Best Rate Promise</h3>
                    <p className="text-zinc-400 text-sm">Book direct for member-only perks and our best available rates.</p>
                  </div>
                </div>

                {/* Row 3 items (fills the remaining grid space) */}
                <div className="lg:col-span-1 lg:row-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
                  <CalendarCheck className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h3 className="font-bold text-lg">Smooth Check‑In</h3>
                    <p className="text-xs text-zinc-400">Fast arrival with flexible requests.</p>
                  </div>
                </div>

                <div className="lg:col-span-1 lg:row-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h3 className="font-bold text-lg">Secure Booking</h3>
                    <p className="text-xs text-zinc-400">Trusted checkout and privacy-first handling.</p>
                  </div>
                </div>

                <div className="lg:col-span-1 lg:row-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
                  <Users className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h3 className="font-bold text-lg">Made for Groups</h3>
                    <p className="text-xs text-zinc-400">Family and business-friendly options.</p>
                  </div>
                </div>

                <div className="lg:col-span-1 lg:row-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
                  <Headphones className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h3 className="font-bold text-lg">24/7 Support</h3>
                    <p className="text-xs text-zinc-400">Always-on help, day or night.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center">
                <Link
                  href="/rooms"
                  className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
                    Explore all rooms <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </>
          );
        })()}
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="px-4 md:px-10 max-w-6xl mx-auto w-full">
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">Guest stories</p>
          <h2 className="text-3xl font-serif font-bold">What our guests loved</h2>
          <p className="text-zinc-400 max-w-2xl">Recent stays that highlight our service, rooms, and attention to detail.</p>
        </div>
        <Testimonials />
      </section>

      {/* --- CTA STRIP --- */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-950 shadow-2xl">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">Plan ahead</p>
                <h3 className="text-3xl font-serif font-bold leading-tight">Reserve your preferred suite before it fills up.</h3>
                <p className="text-zinc-300 max-w-2xl">Share your dates, guest count, and preferences. We will confirm availability and tailored perks within one business day.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/rooms" className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
                      View rooms <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:border-yellow-400/50 hover:text-yellow-100">
                    Talk to concierge
                  </Link>
                </div>
              </div>
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5" />
                <div className="relative space-y-3 text-sm text-zinc-200">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Next available weekend</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-yellow-400">Limited</span>
                  </div>
                  <div className="text-2xl font-semibold text-white">Book now to lock best rate</div>
                  <p className="text-zinc-400">Free date change up to 48 hours before arrival. Concierge support included.</p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-yellow-400">Perks</p>
                      <p className="mt-1 text-white">Airport pickup, late checkout</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-yellow-400">For teams</p>
                      <p className="mt-1 text-white">Boardroom access, catering options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}