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
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }, /* Rotación completa de 360 grados */
        }
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite', // Definir una animación llamada 'spin-slow' con una duración de 10 segundos
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
export default config
