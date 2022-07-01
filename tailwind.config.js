const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CARTOON FREE', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
        body : ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray,
        blue: {
          950: '#17275c',
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',

        },
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}