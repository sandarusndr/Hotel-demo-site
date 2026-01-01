import { rooms } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import BookingForm from "@/components/rooms/BookingForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate Static Params for SEO (Optional but good for performance)
export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image for Room */}
      <div className="relative h-[45svh] sm:h-[55svh] lg:h-[60vh] w-full">
        <Image src={room.imageUrl} alt={room.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-10 left-4 md:left-10 text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">{room.name}</h1>
          <p className="text-xl md:text-2xl text-yellow-400 font-semibold">${room.price} <span className="text-white text-base font-normal">/ night</span></p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Col: Description */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">{room.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Room Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-yellow-500 w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Booking Card */}
        <div className="md:col-span-1">
          <BookingForm room={room} />
        </div>

      </div>
    </div>
  );
}