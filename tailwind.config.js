/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec7f13",
        "background-light": "#f8f7f6",
        "background-dark": "#221910",
      },
      fontFamily: {
        display: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
