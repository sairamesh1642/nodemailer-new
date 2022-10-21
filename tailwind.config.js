module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        purpleGr: "url('./bg.png')"
      },
      colors: {
        "topColor": "#8254AD",
        "bottomColor": "#210A24"
      }
    },
  },
  plugins: [],
}
