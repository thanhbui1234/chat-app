/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class', // Enable dark mode using the class strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeOut: {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-out forwards',
          fadeOut: 'fadeOut 0.5s ease-out forwards',
        },
      },
    },
  },
  plugins: [],
};
