/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // add the paths to your HTML, JS, and TSX files
  ],
  theme: {
    extend: {
      // Adding custom animations and keyframes
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease-out',
        shake: 'shake 0.5s ease-in-out',
        textWave: 'textWave 1.2s ease-in-out infinite',
        fadeInLetter: 'fadeInLetter 0.5s ease-in-out forwards', // Add fadeInLetter animation
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        textWave: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInLetter: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
