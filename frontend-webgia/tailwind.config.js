module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-background-default": "#FDF5ED", // your color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
