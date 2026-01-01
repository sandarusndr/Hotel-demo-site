"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { rooms } from "@/lib/data";
import Image from "next/image";
import { ArrowLeft, Lock, CreditCard } from "lucide-react";
import { Suspense, useState } from "react";

// We wrap the logic in a component to handle Suspense (required for useSearchParams in Next.js)
function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Get data from URL
  const roomId = searchParams.get("roomId");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const totalPrice = searchParams.get("totalPrice");
  const guests = searchParams.get("guests");

  const room = rooms.find((r) => r.id === roomId);

  if (!room) return <div className="text-white text-center pt-20">Room not found.</div>;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      router.push("/checkout/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT COLUMN: Input Details */}
      <div>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Room
        </button>

        <h1 className="text-3xl font-serif font-bold mb-6">Confirm and Pay</h1>

        <form onSubmit={handlePayment} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg w-full focus:outline-none focus:border-yellow-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg w-full focus:outline-none focus:border-yellow-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg w-full focus:outline-none focus:border-yellow-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg w-full focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Payment Details <Lock size={16} className="text-green-500" />
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg flex items-center gap-4">
              <CreditCard className="text-yellow-500" />
              <span className="text-zinc-400 text-sm">This is a demo. No payment will be charged.</span>
            </div>
            <input
              type="text"
              placeholder="Card Number"
              className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg w-full focus:outline-none focus:border-yellow-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM / YY"
                className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg w-full focus:outline-none focus:border-yellow-500"
              />
              <input
                type="text"
                placeholder="CVC"
                className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg w-full focus:outline-none focus:border-yellow-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-zinc-700 text-black font-bold py-4 rounded-xl transition-all mt-6 flex justify-center items-center gap-2"
          >
            {isLoading ? "Processing..." : `Pay $${totalPrice}`}
          </button>
        </form>
      </div>

      {/* RIGHT COLUMN: Order Summary */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-fit lg:sticky lg:top-24">
        <div className="flex gap-4 mb-6">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden">
            <Image src={room.imageUrl} alt={room.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{room.name}</h3>
            <p className="text-sm text-zinc-400">Luxury Collection</p>
            <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
              <span className="text-xs">★ 5.0 (120 reviews)</span>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 py-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-zinc-400">Dates</span>
            <span>
              {checkIn} — {checkOut}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Guests</span>
            <span>{guests} Guest(s)</span>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-4 flex justify-between items-center">
          <span className="font-bold text-xl">Total</span>
          <span className="font-bold text-2xl text-yellow-500">${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
