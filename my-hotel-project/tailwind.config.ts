import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        gold: {
          500: "#D4AF37", // Classic Gold
          600: "#AA8C2C", // Darker Gold for hover
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -150%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, 0) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;