/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F26922",
        graybold: "#71717A",
        lightText: "#A1A1AA",
      },
      fontFamily: {
        oneset: '"Onest", sans-serif',
        bebasNeue: ' "Bebas Neue", sans-serif;',
      },
      backgroundColor: {
        blackLight: "#27272A",
        whiteLight: "#E4E4E7",
      },
    },
  },
  plugins: [],
};

