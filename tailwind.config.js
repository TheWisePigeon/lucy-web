/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins_black: ['poppins-black'],
        poppins_regular: ['poppins-regular'],
        poppins_bold: ['poppins-bold'],
        poppins_semiBold: ['poppins-semiBold'],
        poppins_medium: ['poppins-medium'],
      },

      colors:{
        primary:"#1B51DC",
        secondary: "#CDCDCD",
        borderColor:"#D0D5DD",
        placeholderColor:"#667085"
      }
    },
  },
  plugins: [],
}
