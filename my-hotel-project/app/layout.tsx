import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import standard + serif font
import "./globals.css";
import Navbar from "@/components/common/Navbar"; // We will build this later
import Footer from "@/components/common/Footer"; // We will build this later

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "The Grand Stay | Luxury Hotel",
  description: "Experience the pinnacle of luxury and comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} bg-black text-white font-sans selection:bg-yellow-500/30`}>
        {/* We wrap content in a div to ensure stacking context for fixed navs */}
        <div className="relative min-h-screen flex flex-col">
          <Navbar /> 
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}