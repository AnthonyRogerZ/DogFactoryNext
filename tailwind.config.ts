import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // blue-600
        brand: '#5B5F3D',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'wave-1': {
          '0%, 100%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '50%': { transform: 'translateX(100%) skewX(-12deg)' },
        },
        'wave-2': {
          '0%, 100%': { transform: 'translateX(100%) skewX(-12deg)' },
          '50%': { transform: 'translateX(-100%) skewX(-12deg)' },
        },
        'wave-3': {
          '0%, 100%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '60%': { transform: 'translateX(80%) skewX(-12deg)' },
        },
        neon: {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        'shine': 'shine 3s infinite linear',
        'wave-1': 'wave-1 8s infinite ease-in-out',
        'wave-2': 'wave-2 10s infinite ease-in-out',
        'wave-3': 'wave-3 12s infinite ease-in-out',
        'neon': 'neon 2s infinite ease-in-out',
        'float': 'float 3s infinite ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
