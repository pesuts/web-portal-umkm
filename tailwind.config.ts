import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#528D5C",
        "primary-2": "#63AB45",
        "primary-dark": "#3a6642",
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        poetsen: ['var(--font-poetsen-one)']
      }
    },
  },
  plugins: [],
} satisfies Config;
