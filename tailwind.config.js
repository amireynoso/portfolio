const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        shopify: "#95bf47",
        meli: "#fff159",
        latcom: "#103078",
        datafactory: "#ae1a1f",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
