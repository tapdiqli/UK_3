import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      opacity: {
        8: "0.08",
      },
      colors: {
        // Premium Black & Ruby palette
        ink: {
          DEFAULT: "#121212",
          950: "#0b0b0b",
          900: "#121212",
          800: "#1b1b1b",
          700: "#242424",
          600: "#2f2f2f",
          500: "#3a3a3a",
        },
        ruby: {
          DEFAULT: "#C1121F",
          light: "#E23140",
          dark: "#8E0D17",
          50: "#FDECEE",
          100: "#F9C9CE",
        },
        cream: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0,0,0,0.6)",
        ruby: "0 10px 30px -8px rgba(193,18,31,0.45)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px -20px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "ruby-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(193,18,31,0.25) 0%, rgba(18,18,18,0) 70%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
