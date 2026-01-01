"use client"; // Client component for scroll effects

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-10 transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md border border-white/10 rounded-full mx-4 shadow-lg py-3"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tighter">
            Grand<span className="text-yellow-500">Stay</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              <span className="hover:underline underline-offset-8 decoration-yellow-500/70">Home</span>
            </Link>
            <Link href="/rooms" className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              <span className="hover:underline underline-offset-8 decoration-yellow-500/70">Rooms</span>
            </Link>
            <Link href="/amenities" className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              <span className="hover:underline underline-offset-8 decoration-yellow-500/70">Amenities</span>
            </Link>
            <Link href="/contact" className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              <span className="hover:underline underline-offset-8 decoration-yellow-500/70">Contact</span>
            </Link>
          </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-amber-500/30 hover:brightness-110 transition-all"
            >
              Book a Call
            </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-zinc-800 p-6 md:hidden flex flex-col gap-5 items-center z-40">
           <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-white">Home</Link>
           <Link href="/rooms" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-white">Rooms</Link>
           <Link href="/amenities" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-white">Amenities</Link>
           <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-white">Contact</Link>
           <Link
             href="/contact"
             onClick={() => setIsMobileMenuOpen(false)}
             className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/30"
           >
             Book a Call
           </Link>
        </div>
      )}
    </nav>
  );
}