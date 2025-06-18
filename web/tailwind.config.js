/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'nav': '0px 4px 9px rgba(0, 0, 0, 0.08)',
      },
      backdropBlur: {
        'sm': '10px',
      },
    },
  },
  plugins: [],
};