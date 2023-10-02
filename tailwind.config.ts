import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'open-menu': 'openMenu 0.5s linear',
        'close-menu': 'closeMenu 0.5s linear',
      },
      keyframes: {
        openMenu: {
          "0%": {
            transform: "translateX(-300px)", opacity: "1"
          },
          "100%": {
            transform: "translateX(0px)", opacity: "1"
          }
        },
        closeMenu: {
          "0%": {
            transform: "translateX(0px)", opacity: "1"
          },
          "100%": {
            transform: "translateX(-300px)", opacity: "1"
          }
        }
      },
      gradientColorStops: {
        'pink': '#FF69B4',
        'blue': '#0000FF',
      },
      linearGradientColors: {
        'gradient': ['to right', 'pink 0%', 'blue 100%'],
      },
      stroke: {
        'blue': 'rgb(148, 66, 63)',
      },
      strokeWidth: {
        '5': '5',
      },
      strokeDasharray: {
        '50, 14': '50, 14',
      },
      fill: {
        'none': 'none',
      },
    },
  },
  plugins: [],
}
export default config
