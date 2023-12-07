/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: { defaultText: '#03071e', richBlack: '010B13' },
      fontFamily: {
        andika: ['Andika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
