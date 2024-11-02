/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: { center: true, padding: "2rem" },
    extend: {
      colors: {
        "main-background": "#FFFDF8",
        "background-2": "#FFF8E9",
        border: "#E3E3E0",
        accent: "#DB8E21",
        "card-light": "#FFECBC",
        "selected-item": "#FFF4D5",
        "main-dark": "#353431",
      },

      fontFamily: {
        satoshi: [
          "Satoshi",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
