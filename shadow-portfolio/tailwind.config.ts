import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-geist-mono)", "IBM Plex Mono", "monospace"],
        sans: ["var(--font-geist-sans)", "Geist", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
