// Importar opções do config.js
const options = require("./config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./static/*.{html,js}", "./static/**/*.{html,js}"],
  theme: {
    extend: options.extend,
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
