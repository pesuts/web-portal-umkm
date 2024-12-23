import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#528D5C",
        "primary-2": "#63AB45",
        "primary-hover": "#3a6642",
        "primary-dark": "#204927",
        "primary-bg": "#DDE5DE",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        poetsen: ["var(--font-poetsen-one)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
