// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'fresh-blue': '#3572EF',
        'light-purpe': '#9197B3',
      },
    },
  },
  plugins: [],
}
