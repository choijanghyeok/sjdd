import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#2563eb",
        "sky-blue": "#3b82f6",
        "light-blue": "#60a5fa",
        "pale-blue": "#93c5fd",
        "ice-blue": "#dbeafe",
        "deep-blue": "#1e3a5f",
        "section-bg": "#eff6ff",
        "text-dark": "#0f172a",
        "off-white": "#f8fafc",
        "soft-gray": "#f1f5f9",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
