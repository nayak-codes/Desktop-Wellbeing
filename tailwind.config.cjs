/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#07090e',
        darker: '#0b0f19',
        'card': 'rgba(15, 23, 42, 0.75)',
        'cyan-neon': '#00f2fe',
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-orb': 'floatOrb 22s infinite alternate ease-in-out',
        'pulse-dot': 'pulseDot 2s infinite',
        'toast-in': 'toastIn 0.3s ease',
        'shine': 'shineEffect 6s infinite',
      },
      keyframes: {
        floatOrb: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(70px, 50px) scale(1.1)' },
          '100%': { transform: 'translate(-50px, 90px) scale(0.95)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.6' },
        },
        toastIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        shineEffect: {
          '0%': { transform: 'translate(-100%, -100%) rotate(30deg)' },
          '20%, 100%': { transform: 'translate(100%, 100%) rotate(30deg)' },
        },
      },
    },
  },
  plugins: [],
}
