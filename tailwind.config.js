/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(./assets/Images/banner.jpg)",
      },
      textShadow: {
        default: "0 2px 0 #000",
        md: "0 2px 2px #000",
        h2: "0 0 3px #FF0000, 0 0 5px #0000FF",
        h1: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
        "2xl": "1px 1px 5px rgb(33 34 43 / 20%)",
        "3xl": "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
        outlined:
          "-1px 1px 0 #41ba45,1px 1px 0 #c63d2b,1px -1px 0 #42afac,-1px -1px 0 #c6c23f",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
