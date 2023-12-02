module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-background-default": "#222831", // your color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
