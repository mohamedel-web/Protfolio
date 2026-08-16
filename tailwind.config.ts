import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090B",
          900: "#0B0C0F",
          800: "#111318",
          700: "#181B21",
          600: "#22262E",
        },
        mist: {
          50: "#F7F8FA",
          200: "#C7CAD1",
          400: "#8A8F99",
          600: "#5B606B",
        },
        signal: {
          500: "#3B82F6",
          600: "#2563EB",
          glow: "#60A5FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(59,130,246,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 60px -25px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blob: "blob 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
