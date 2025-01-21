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
      },
      backgroundImage: {
        "beige-clear": "linear-gradient(to bottom, #F6F0DC, transparent)",
      },
    },
  },
};
