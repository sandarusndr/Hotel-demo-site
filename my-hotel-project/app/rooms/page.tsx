import Link from "next/link";
import { rooms } from "@/lib/data"; // You will need to create this data file next
import Image from "next/image";

export default function RoomsPage() {
  return (
    <div className="pt-24 px-4 md:px-10 pb-20 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Accommodations</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Choose from our selection of exquisitely designed rooms and suites, tailored for your comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Link href={`/rooms/${room.slug}`} key={room.id} className="group block">
            <div className="relative h-[240px] sm:h-[280px] lg:h-[300px] w-full overflow-hidden rounded-2xl mb-4">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
              <Image 
                src={room.imageUrl} 
                alt={room.name} 
                fill 
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-sm font-semibold text-white">
                ${room.price} / night
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-yellow-500 transition-colors">{room.name}</h3>
            <p className="text-zinc-400 line-clamp-2 text-sm">{room.description}</p>
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
              View Details &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}