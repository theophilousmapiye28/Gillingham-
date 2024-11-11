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
        white:"#ffff",
        black:"#000",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBlue: '#0001FE',
      },
    },
  },
  plugins: [],
};
export default config;
