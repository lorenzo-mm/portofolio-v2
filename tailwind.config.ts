import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        'spin-slow': 'spin 100s linear infinite', /* Cardhello */
        'floating-animation': 'floatingAnimation 8s ease infinite', /* Contact */
        'circle-animation': 'circleAnimation 6s infinite' /* Cardhello right */
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient': 'linear-gradient(311.97deg, #689F38 0%, #1B5E20 100%)' /* Contact */
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
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#09050f",
          "secondary": "#09050f",
          "accent": "#37cdbe",
          "base-100": "#E5E5E5",
        },
        black: {
          "primary": "#FFFFFF",
          "secondary": "#E5E5E5",
          "accent": "#37cdbe",
          "base-100": "#09050f",
        }
      },
    ],
  }
}

export default config
