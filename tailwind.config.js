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
      spacing: {
        "15vh": "15vh",
        "1/4vh": "25vh",
        mvh: "50vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
