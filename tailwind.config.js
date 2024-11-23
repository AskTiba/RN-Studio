/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        coffee: '#543310',
        cream: '#F8F4E1',
        honeydew: '#F1FAEE',
      },
    },
  },
  plugins: [],
};
