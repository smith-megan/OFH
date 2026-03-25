/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        special: ['"DM Serif Text"', '"sans-serif"'],
      },
      gridColumn: {
        overlap: "1 / span 7",
        underlap: "4 / -1",
      },
      animation: {
        "scroll-slow": "scroll 4s linear forwards",
        "move-down": "movedown 2s linear forwards",
      },
      keyframes: {
        scroll: {
          "0%": { height: 0 },
          "100%": { height: "100%" },
          // "50%": { transform: "rotate(3deg)" },
        },
        movedown: {
          "0%": { opacity: 1, transform: "translateY(-30px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      colors: {
        lightgray: "#ABAAA6",
        dark: "#242424",
      },
    },
  },
  plugins: [],
}
