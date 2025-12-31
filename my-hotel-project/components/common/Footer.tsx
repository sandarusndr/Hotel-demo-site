import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Grand<span className="text-yellow-500">Stay</span>
            </h2>
            <p className="text-zinc-400 max-w-sm">
              Experience the pinnacle of luxury and comfort in the heart of the city. 
              We are dedicated to providing you with an unforgettable stay.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-yellow-500 transition-colors">Accommodations</Link></li>
              <li><Link href="/amenities" className="hover:text-yellow-500 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Digital Complex</li>
              <li>Panadugama, Akuressa.</li>
              <li>+94 770050082</li>
              <li>reservations@grandstay.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Grand Stay Hotel. All rights reserved.
          </p>
          <div className="flex gap-4">
             <Facebook className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
             <Instagram className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
             <Twitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}