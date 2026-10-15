/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- Esto le dice a Tailwind que lea tus componentes
  ],
  theme: {
    extend: {
      colors: {
        altpro: {
          white: '#FFFFFF',
          black: '#080B12',
          blue: '#2563EB',
          tech: '#0EA5E9',
          navy: '#0B1F3A',
          grayLight: '#F3F5F8',
          graySec: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}