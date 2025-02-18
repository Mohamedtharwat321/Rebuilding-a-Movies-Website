/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{html,js,css}",
    "./index.html",       // Include your main HTML file
   , // Include all HTML/JS files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        p1: "#ff2c1f",
        p2: "#020307",
        p3: "#fff",
      },
      gridTemplateColumns: {
        moviesgrid: "repeat(auto-fit, minmax(180px, auto))",
      },
      backgroundImage: {
        headerImage: "url(../img/home3.jpg)",
      },
      fontFamily: {
        Pfont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
