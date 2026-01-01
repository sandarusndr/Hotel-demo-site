import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina R.",
    title: "Stayed in Deluxe Ocean Suite",
    rating: 5,
    text: "Woke up to sunrise over the ocean every morning. The team anticipated every request and the bedding was heavenly.",
  },
  {
    name: "Daniel K.",
    title: "Executive City Loft — 4 nights",
    rating: 5,
    text: "Lightning-fast check-in, spotless room, and a quiet workspace with great Wi‑Fi. Perfect for remote work between meetings.",
  },
  {
    name: "Sofia M.",
    title: "Family Garden Villa",
    rating: 4,
    text: "Kids loved the pool access and we loved the calm garden vibe. Breakfast was fresh and staff were genuinely kind.",
  },
];

export default function Testimonials() {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/60 shadow-2xl">
      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="relative flex items-center gap-3 text-yellow-400">
          <Quote className="h-6 w-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Guest stories</p>
        </div>
        <div className="relative mt-4 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.title}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < t.rating ? "fill-current" : "opacity-30"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-200 leading-relaxed">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
