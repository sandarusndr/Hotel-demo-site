import Link from "next/link";
import type { Room } from "../../lib/types";
import { formatCurrency } from "../../lib/utils";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Link
      href={`/rooms/${room.slug}`}
      className="group overflow-hidden rounded-lg border bg-white"
    >
      <div className="aspect-[4/3] w-full bg-gray-100" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold group-hover:underline">
            {room.name}
          </h3>
          <div className="shrink-0 text-sm font-semibold">
            {formatCurrency(room.price)}
            <span className="text-xs font-normal text-gray-500">/night</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{room.description}</p>
      </div>
    </Link>
  );
}
