import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2C2C2C",
        "deep-olive": "#3B4A3A",
        gold: "#C4A96A",
        "gold-light": "#D4BC82",
        "soft-brown": "#8B7355",
        "warm-white": "#FAF8F5",
        cream: "#F2EDE7",
        navy: "#1B2A4A",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "pulse-ring": "pulseRing 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%, 100%": { opacity: "0", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
