import Image from "next/image";
import {
  Car,
  Coffee,
  Dumbbell,
  Sparkles,
  Waves,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

const amenityGroups = [
  {
    label: "Wellness",
    items: [
      {
        title: "Pool",
        description: "Refresh in our temperature-controlled pool.",
        Icon: Waves,
        image: "/images/amenities/infinity-pool-sunset.jpg",
      },
      {
        title: "Spa",
        description: "Relax with massages and wellness treatments.",
        Icon: Sparkles,
        image: "/images/amenities/spa-treatment-room.jpg",
      },
      {
        title: "Gym",
        description: "A modern fitness space open daily.",
        Icon: Dumbbell,
        image: "/images/amenities/modern-gym-equipment.jpg",
      },
    ],
  },
  {
    label: "Dining",
    items: [
      {
        title: "Restaurant",
        description: "Breakfast and dinner with local flavors.",
        Icon: UtensilsCrossed,
        image: "/images/amenities/fine-dining-restaurant.jpg",
      },
      {
        title: "Specialty Coffee",
        description: "Freshly brewed coffee throughout the day.",
        Icon: Coffee,
        image: "/images/amenities/barista-coffee-art.jpg",
      },
    ],
  },
  {
    label: "Convenience",
    items: [
      {
        title: "Free Wi‑Fi",
        description: "Stay connected throughout the property.",
        Icon: Wifi,
        image: "/images/amenities/lounge-workspace.jpg",
      },
      {
        title: "Airport Pickup",
        description: "Convenient transfer service on request.",
        Icon: Car,
        image: "/images/amenities/luxury-car-transfer.jpg",
      },
    ],
  },
];

export const metadata = {
  title: "Amenities | My Hotel",
};

export default function AmenitiesPage() {
  return (
    <div className="pt-24 pb-20 bg-zinc-950">
      <section className="px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.jpg"
                alt="Amenities"
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
            </div>

            <div className="relative px-6 py-14 md:px-12 md:py-24">
              <p className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-500 backdrop-blur-sm">
                Curated Amenities
              </p>
              <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-sm">
                Everything you need, <br />
                <span className="text-zinc-400">thoughtfully provided.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-zinc-300 text-base md:text-lg leading-relaxed">
                From wellness and fitness to dining and everyday convenience,
                our amenities are designed to make your stay effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {amenityGroups.map((group) => (
              <div key={group.label}>
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    {group.label}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map(({ title, description, Icon, image }) => (
                    <div
                      key={title}
                      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-500 hover:border-zinc-600 hover:shadow-2xl"
                    >
                      {/* 1. The Image Layer (Slides up from bottom) */}
                      <div className="absolute inset-0 z-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Dark Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                      </div>

                      {/* 2. Content Layer */}
                      <div className="relative z-10 flex flex-col items-start gap-4 transition-transform duration-500 group-hover:-translate-y-2">
                        {/* Icon Box */}
                        <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-colors duration-300 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/20">
                          <Icon className="h-6 w-6 text-yellow-500 transition-colors group-hover:text-yellow-400" />
                        </div>

                        {/* Text */}
                        <div>
                          <div className="text-xl font-bold text-white group-hover:text-white">
                            {title}
                          </div>
                          <p className="mt-2 text-sm text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-200">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}