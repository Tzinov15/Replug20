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
        tertiary: "#c07373", // Darker golden
        "blue-smoke": {
          50: "#f6f7f7",
          100: "#e1e6e4",
          200: "#c2cdc9",
          300: "#9caca7",
          400: "#7d8f8a",
          500: "#5d6f6a",
          600: "#495855",
          700: "#3d4845",
          800: "#333c3a",
          900: "#2d3432",
          950: "#171c1b",
        },

        lotus: {
          50: "#fbf5f5",
          100: "#f6eaea",
          200: "#f0d8d8",
          300: "#e4bdbd",
          400: "#d39696",
          500: "#c07373",
          600: "#aa5858",
          700: "#8e4747",
          800: "#793f3f",
          900: "#643838",
          950: "#351a1a",
        },

        bazaar: {
          50: "#f9f7f7",
          100: "#f3f0f0",
          200: "#e9e2e4",
          300: "#d7cacd",
          400: "#c0acb1",
          500: "#9d8189",
          600: "#8d717a",
          700: "#745c65",
          800: "#624f56",
          900: "#56454c",
          950: "#2d2427",
        },

        "spanish-white": {
          50: "#faf8f0",
          100: "#f5f1e0",
          200: "#e2d7a5",
          300: "#d3be76",
          400: "#c9aa56",
          500: "#be9142",
          600: "#a87437",
          700: "#8c5931",
          800: "#73492d",
          900: "#5f3d28",
          950: "#361f12",
        },

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
