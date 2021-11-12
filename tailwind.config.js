

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorPink: '#f379a7',
        colorBlue: '#95b3e0',
        colorGray: '#252525',
        colorLightGray: '#f3f3f3',
        colorToys: '#e4f6fe'
      },
      fontFamily: {
        fredoka: ["Fredoka One", "cursive"],
        rubik: ["Rubik", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
