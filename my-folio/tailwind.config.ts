import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar"; 
import lineClamp from "@tailwindcss/line-clamp"; 

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        "3xl": "1600px",

      }
    },
  },
  plugins: [
    scrollbar,
    lineClamp,
  ]
};
export default config;
