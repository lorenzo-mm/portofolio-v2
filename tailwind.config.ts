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
        accent: {
          1: 'hsl(var(--color-accent1) / <alpha-value>)',
          2: 'hsl(var(--color-accent2) / <alpha-value>)'
        },
        text: {
          1: 'rgba(255, 255, 255, 1)',
          2: 'rgba(0, 0, 0, .6)'
        },
        bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
        content: 'hsl(var(--color-content) / <alpha-value>)'
      },
      keyframes: {
        spin: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0)' }, /* Configuración inicial de la rotación */
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' } /* Rotación completa de 360 grados */
        },
        floatingAnimation: {
          '0%, 100%': { transform: 'translate(0) scale(1)' }, /* Configuración inicial memojiPC flotando */
          '50%': { transform: 'translateY(5px) scale(.99)' } /* Configuración final memojiPC flotando */
        },
      circleAnimation: {
        '0%, 30%, 100%': { transform: 'translate(-50%, 50%) scale(1)'}, /* Configuración inicial circulos blancos */
        '15%': { transform: 'translate(-50%, 50%) scale(.95)'} /* Configuración final circulos blancos */
      }  
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
        'floating-animation': 'floatingAnimation 8s ease infinite',
        'circle-animation': 'circleAnimation 6s infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient': 'linear-gradient(311.97deg, #689F38 0%, #1B5E20 100%)'
      },
      maskImage: {
        'gradient-mask': 'linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, #fff 17.39%, #fff 85.24%,rgba(255, 255, 255, 0) 100%)'
      },
      transitionDuration: {
        '450': '450ms', /* Configuración memoji principal */
      },
    }
  },
  plugins: [
    require('daisyui')
  ],
}
export default config
