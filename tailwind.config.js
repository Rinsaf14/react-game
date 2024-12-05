/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      violet: "#e056fd",
      "english-white": "#ecf0f1",
      white: "#fff",
      pinkCerise: "#f368e0",
      lightPink: "#ffcccc",
    },
    extend: {
      fontFamily: {
        aclonica: ["Aclonica", "sans-serif"],
        alfa: ["Alfa Slab One", "sans-serif"],
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
