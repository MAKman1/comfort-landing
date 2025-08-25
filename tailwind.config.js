/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#3E7576',
          DEFAULT: '#4A8B8C',
          light: '#5A9B9C',
        },
        secondary: {
          dark: '#C17A4F',
          DEFAULT: '#D09166',
          light: '#E0A176',
        },
        background: {
          DEFAULT: '#D9E5E5',
          light: '#E9F5F5',
        },
        text: {
          dark: '#1A1A1A',
          DEFAULT: '#2A2A2A',
          light: '#4A4A4A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
