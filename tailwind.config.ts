/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0A0B",
          secondary: "#111113",
        },
        border: "#1A1A1C",
        text: {
          DEFAULT: "#F8F8F8",
          secondary: "#BCBCBC",
        },
        accent: "#00DC82",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
