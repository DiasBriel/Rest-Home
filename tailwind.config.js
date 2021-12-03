module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#D55A00",
        lightOrange: "#FF9300",
        darkBlue: "#061224",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
