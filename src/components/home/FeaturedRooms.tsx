import Link from "next/link";

import RoomCard from "@/components/rooms/RoomCard";
import { rooms } from "@/lib/data";

export default function FeaturedRooms() {
  const featuredRooms = rooms.filter((r) => r.featured).slice(0, 3);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured rooms
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              A quick look at our most popular stays.
            </p>
          </div>
          <Link href="/rooms" className="text-sm font-semibold hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredRooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
