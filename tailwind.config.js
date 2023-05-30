const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        display: ['"Yeseva One"', ...defaultTheme.fontFamily.serif]
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
