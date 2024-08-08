/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'slide-top': 'slide-top 1s ease-in-out',
        'slide-right': 'slide-right 1s ease-in-out',
        'slide-bottom': 'slide-bottom 1s ease-in-out',
        'slide-left': 'slide-left 1s ease-in-out',
      },
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(-100%)'},
          '100%': { transform: 'translateY(0)' }
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)' }
        },
        'slide-bottom': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(-100%)' }
        },
        'slide-left': {
          '0%': { transform: 'translateX(150%)'},
          '100%': { transform: 'translateX(100%)' }
        },
      }
    },
  },
  plugins: [],
}

