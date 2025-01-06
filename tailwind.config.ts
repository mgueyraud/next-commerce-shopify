import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },
        blink: {
          "0%": {
            opacity: "0.2"
          },
          "20%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0.2"
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        blink: 'blink 1.4s both infinite'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    typography,
    containerQueries,
    plugin(({matchUtilities, theme}) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value
            }
          }
        },
        {
          values: theme('transition')
        }
      )
    })
  ],
} satisfies Config;
