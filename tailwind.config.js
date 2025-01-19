/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      animation: {
        'fill-draw': 'fill-draw 3s ease-in-out infinite',
        slide: "slide 20s linear infinite",
      },
      fontFamily: {
        interTight: ['Michroma', 'sans-serif'],
        mono: ['Major-Mono-Display', 'monospace'],
        santy: ["Tomorrow", "swap", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
          'fill-draw': {
          '0%': { fillOpacity: '0', strokeDasharray: '0 1500', strokeDashoffset: '0', stroke: 'url(#infinityGradient)' },
          '50%': { fillOpacity: '0.5', strokeDasharray: '1500 1500', strokeDashoffset: '0', stroke: 'url(#infinityGradient)' },
          '100%': { fillOpacity: '1', strokeDasharray: '1500 1500', strokeDashoffset: '0', stroke: 'none' },
          },
        },
      },
      screens: {
        'xs': '375px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2c5364, #203a43, #0f2027)',
      },
    },
  },
  plugins: [],
}

