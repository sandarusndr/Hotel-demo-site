import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-2xl border bg-white p-8 md:p-12">
          <p className="text-sm font-semibold text-gray-600">Welcome</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            Stay in comfort. Wake up inspired.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600">
            Discover thoughtfully designed rooms, premium amenities, and a
            location that puts you close to everything.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rooms"
              className="inline-flex h-10 items-center justify-center rounded bg-black px-5 text-sm font-semibold text-white"
            >
              Browse rooms
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded border px-5 text-sm font-semibold"
            >
              Contact us
            </Link>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Add your hero image at public/images/hero-bg.jpg (optional).
          </p>
        </div>
      </div>
    </section>
  );
}
