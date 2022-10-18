/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "add-green": "#087EE1",
        "delete-red": "#f2709c",
        "white-gradient": "#E1E9E8",
      },
    },
  },
  plugins: [],
};
