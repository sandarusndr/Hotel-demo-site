import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="bg-green-500/10 p-6 rounded-full mb-6">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
      </div>

      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-zinc-400 max-w-md mb-8">
        Thank you for choosing The Grand Stay. We have sent a confirmation email to you. We look forward to hosting you.
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/rooms"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-full transition-colors"
        >
          Book Another Room
        </Link>
      </div>
    </div>
  );
}
