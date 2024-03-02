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
          '0%, 100%': { transform: 'translate(0) scale(1)' },
          '50%': { transform: 'translateY(5px) scale(.99)' }
        }
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
        'floating-animation': 'floatingAnimation 8s ease infinite'
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
        '450': '450ms',
      },
    }
  },
  plugins: [
    require('daisyui')
  ],
}
export default config
