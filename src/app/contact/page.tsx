export const metadata = {
  title: "Contact | My Hotel",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-zinc-950 py-16">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 text-white">
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Let&apos;s talk
          </p>
          <h1 className="text-4xl font-serif font-bold leading-tight md:text-5xl">
            Plan your stay with us
          </h1>
          <p className="max-w-2xl text-sm text-zinc-300 md:text-base">
            Share your dates, special requests, or partnership ideas. Our team replies promptly during business hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />
            <form className="relative p-6 sm:p-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-zinc-200">
                  <span>Name</span>
                  <input
                    required
                    placeholder="Alex Doe"
                    className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-2 ring-transparent transition focus:border-yellow-400/60 focus:ring-yellow-500/30"
                  />
                </label>
                <label className="space-y-2 text-sm text-zinc-200">
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-2 ring-transparent transition focus:border-yellow-400/60 focus:ring-yellow-500/30"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-zinc-200">
                <span>Subject</span>
                <input
                  placeholder="Reservation inquiry"
                  className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-2 ring-transparent transition focus:border-yellow-400/60 focus:ring-yellow-500/30"
                />
              </label>

              <label className="space-y-2 text-sm text-zinc-200">
                <span>Message</span>
                <textarea
                  required
                  placeholder="Tell us about your dates, number of guests, or any special requests."
                  className="min-h-32 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-2 ring-transparent transition focus:border-yellow-400/60 focus:ring-yellow-500/30"
                />
              </label>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-zinc-400">
                  This is a demo form; no backend is wired yet.
                </p>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 px-5 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/30 transition hover:brightness-110"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* Contact info + map */}
          <div className="grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Visit / Call
              </div>
              <div className="mt-3 space-y-3 text-sm text-zinc-200">
                <p className="text-lg font-semibold text-white">GrandStay, Akuressa, Sri Lanka</p>
                <p>Open daily: 8:00 AM – 10:00 PM</p>
                <div className="space-y-1 text-zinc-300">
                  <p>Front Desk: +94 11 234 5678</p>
                  <p>Concierge: +94 77 123 4567</p>
                  <p>Email: stay@grandstay.lk</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg">
              <div className="border-b border-white/10 p-4 text-sm text-zinc-200">Find us</div>
              <iframe
                title="Google Maps"
                className="h-72 w-full sm:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=6.1124216,80.4877242&z=17&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
