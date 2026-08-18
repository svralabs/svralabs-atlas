/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#141412',
        heading: '#EDEAE3',
        text: 'rgba(237,234,227,0.62)',
        accent: '#C9A227',
        'card-glass': 'rgba(237,234,227,0.06)',
        border: 'rgba(237,234,227,0.14)',
        'accent-bg': 'rgba(28,24,8,0.1)',
        'accent-border': 'rgba(28,24,8,0.15)',
      },
      fontFamily: {
        display: ['Cormorant', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '1.5rem': '1.5rem',
        '2rem': '2rem',
        '2.2rem': '2.2rem',
        '3rem': '3rem',
        '3.5rem': '3.5rem',
      },
      animation: {
        'fade-scale-in': 'fadeScaleIn 1s ease-out 0.15s forwards',
        'fade-in': 'fadeIn 1s ease-out 0.45s forwards',
        'fade-up-in': 'fadeUpIn 0.6s ease-out forwards',
        'fade-left-in': 'fadeLeftIn 0.9s ease-out 0.3s forwards',
        'fade-corner-in': 'fadeUpIn 0.9s ease-out 0.5s forwards',
      },
      keyframes: {
        fadeScaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUpIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeftIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}