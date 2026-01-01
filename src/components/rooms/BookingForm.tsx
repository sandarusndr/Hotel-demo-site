"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Room } from "@/lib/types";

export default function BookingForm({ room }: { room: Room }) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);

  // Calculate price whenever dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const timeDiff = end.getTime() - start.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24);

      if (dayDiff > 0) {
        setNights(dayDiff);
        setTotalPrice(dayDiff * room.price);
      } else {
        setNights(0);
        setTotalPrice(0);
      }
    }
  }, [checkIn, checkOut, room.price]);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;

    // Redirect to checkout with query params
    const query = new URLSearchParams({
      roomId: room.id,
      checkIn,
      checkOut,
      guests: guests.toString(),
      totalPrice: totalPrice.toString(),
      nights: nights.toString(),
    }).toString();

    router.push(`/checkout?${query}`);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:sticky lg:top-24 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Book Your Stay</h3>
        <div className="text-right">
          <p className="text-sm text-zinc-400">From</p>
          <p className="text-xl font-bold text-yellow-500">
            ${room.price}
            <span className="text-sm text-zinc-400">/night</span>
          </p>
        </div>
      </div>

      <form onSubmit={handleBooking} className="space-y-4">
        {/* Date Inputs */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-black/50 p-3 rounded-lg border border-zinc-800">
            <label className="block text-xs text-zinc-500 uppercase font-bold mb-1">Check-in</label>
            <input
              type="date"
              required
              className="w-full bg-transparent text-white text-sm focus:outline-none [color-scheme:dark]"
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="bg-black/50 p-3 rounded-lg border border-zinc-800">
            <label className="block text-xs text-zinc-500 uppercase font-bold mb-1">Check-out</label>
            <input
              type="date"
              required
              className="w-full bg-transparent text-white text-sm focus:outline-none [color-scheme:dark]"
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        {/* Guest Selector */}
        <div className="bg-black/50 p-3 rounded-lg border border-zinc-800">
          <label className="block text-xs text-zinc-500 uppercase font-bold mb-1">Guests</label>
          <select
            className="w-full bg-transparent text-white text-sm focus:outline-none"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          >
            {[...Array(room.capacity)].map((_, i) => (
              <option key={i} value={i + 1} className="bg-black">
                {i + 1} Guest{i > 0 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Price Summary */}
        {nights > 0 && (
          <div className="py-4 border-t border-zinc-800 space-y-2">
            <div className="flex justify-between text-sm text-zinc-400">
              <span>
                ${room.price} x {nights} nights
              </span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400">
              <span>Service Fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-white pt-2">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={nights <= 0}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-bold py-4 rounded-xl transition-all active:scale-95"
        >
          {nights > 0 ? "Proceed to Payment" : "Select Dates"}
        </button>

        <p className="text-center text-xs text-zinc-500">You won't be charged yet</p>
      </form>
    </div>
  );
}
