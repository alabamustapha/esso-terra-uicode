/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./html/**/*.{html,js}', '*.{html,js}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      primary: {
        100: '#CCE9D8',
        200: '#AADABE',
        300: '#80C79E',
        400: '#56B47E',
        500: '#2BA25D',
        600: '#018F3D',
        700: '#017733',
        800: '#015F29',
        900: '#00471E',
      },
      secondary: {
        100: '#FEDFCD',
        200: '#FECAAC',
        300: '#FD8083',
        400: '#FC965A',
        500: '#FC7B30',
        600: '#FB6107',
        700: '#D15106',
        800: '#A74105',
        900: '#7D3003',
      },
      error: {
        100: '#FCCDCD',
        200: '#F65858',
        300: '#F20505',
        400: '#CA0404',
      },
      pending: {
        100: '#FFF7D9',
        200: '#FEDC62',
        300: '#FED543',
        400: '#D4B138',
      },
      success: {
        100: '#D5F2DB',
        200: '#73D288',
        300: '#2DBC4D',
        400: '#269D40',
      },
      grey: {
        100: '#D5D5D5',
        200: '#B8B8B8',
        300: '#727272',
        400: '#2B2B2B',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
