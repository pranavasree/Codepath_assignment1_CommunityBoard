/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#f4511f",
        backgroundcolor: "#b7bca9",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
};
