/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "azul-safira":      "rgb(var(--azul-safira) / <alpha-value>)",
        "azul-noite":       "rgb(var(--azul-noite) / <alpha-value>)",
        "azul-real":        "rgb(var(--azul-real) / <alpha-value>)",
        "azul-claro":       "rgb(var(--azul-claro) / <alpha-value>)",
        "dourado":          "rgb(var(--dourado-champanhe) / <alpha-value>)",
        "ouro-claro":       "rgb(var(--ouro-claro) / <alpha-value>)",
        "ouro-rose":        "rgb(var(--ouro-rose) / <alpha-value>)",
        "marfim":           "rgb(var(--marfim) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        sans:  ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
