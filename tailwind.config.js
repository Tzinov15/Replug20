import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [forms],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"], // Set Comfortaa as the default sans-serif font
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#A4853F", // Custom primary color (golden)
        secondary: "#445924", // Mossy green
        background: "#F5F1E0", // Soft cream
        accent: "#556B2F", // Deep forest green
        highlight: "#E3C892", // Warm beige
        highlightLite: "#CBB887",
        woodland: {
          50: "#f6faeb",
          100: "#eaf3d4",
          200: "#d6e7af",
          300: "#bbd77f",
          400: "#9fc457",
          500: "#82a939",
          600: "#64862a",
          700: "#4d6724",
          800: "#445924",
          900: "#374720",
          950: "#1b260d",
        },
      },
      backgroundImage: {
        // "beige-clear": "linear-gradient(to bottom, #F6F0DC, transparent)",
        "beige-clear": "linear-gradient(to bottom, #F6F0DC 0px, #F6F0DC 100px, transparent 100%)",
        "beige-clear-mb": "linear-gradient(to bottom, #F6F0DC 0px, #F6F0DC 75px, transparent 100%)",
      },
    },
  },
};
