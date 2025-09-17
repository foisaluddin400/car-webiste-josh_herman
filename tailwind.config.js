/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#D7B473",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#1A1E1F",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [],
};