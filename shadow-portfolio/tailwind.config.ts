import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060608",
        bg2: "#0b0b0e",
        bg3: "#111116",
        bg4: "#17171e",
        bg5: "#1e1e28",
        acc: "#c8102e",
        acc2: "#8b0000",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "IBM Plex Mono", "monospace"],
        sans: ["var(--font-geist-sans)", "Geist", "system-ui", "sans-serif"],
      },
      keyframes: {
        "pulse-dot": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        scan: {
          "0%": { top: "20%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "80%", opacity: "0" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.5s ease infinite",
        scan: "scan 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
