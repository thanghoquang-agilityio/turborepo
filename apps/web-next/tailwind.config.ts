import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

import { backgroundImage, colors, fontSize } from './src/themes'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      backgroundImage,
      fontSize,
      colors,
      container: {
        padding: {
          DEFAULT: '10px',
          md: '20px',
          lg: '40px',
          xl: '80px',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          small: '4px',
          medium: '8px',
          large: '18px',
        },
        borderWidth: {
          small: '1px',
          medium: '1.5px',
          large: '2px',
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              100: colors.white1,
              200: colors.white2,
              300: colors.white3,
              400: colors.white4,
            },
            primary: {
              100: colors.blue1,
              200: colors.blue2,
              300: colors.blue3,
              400: colors.blue4,
              500: colors.blue5,
            },
            secondary: {
              100: colors.purple1,
              200: colors.purple2,
              300: colors.purple3,
              400: colors.purple4,
              500: colors.purple5,
            },
            foreground: {
              100: colors.grey1,
              200: colors.grey2,
              300: colors.grey3,
            },
            success: {
              100: colors.green1,
              200: colors.green2,
              300: colors.green3,
            },
            warning: {
              100: colors.yellow1,
              200: colors.yellow2,
              300: colors.yellow3,
            },
            danger: {
              100: colors.red1,
              200: colors.red2,
              300: colors.red3,
            },
            default: colors.black1,
          },
        },
        dark: {
          colors: {
            background: {
              100: colors.black1,
              200: colors.black2,
              300: colors.grey1,
              400: colors.black4,
            },
            primary: {
              100: colors.white1,
              200: colors.grey3,
              300: colors.white2,
              400: colors.white2,
              500: colors.grey3,
            },
            secondary: {
              100: colors.purple4,
              200: colors.grey3,
              300: colors.purple5,
              400: colors.purple4,
              500: colors.white3,
            },
            foreground: {
              100: colors.grey1,
              200: colors.grey2,
              300: colors.grey3,
            },
            success: {
              100: colors.green1,
              200: colors.green2,
              300: colors.green3,
            },
            warning: {
              100: colors.yellow1,
              200: colors.yellow2,
              300: colors.yellow3,
            },
            danger: {
              100: colors.red1,
              200: colors.red2,
              300: colors.red3,
            },
            default: colors.white1,
          },
        },
      },
    }),
  ],
}
export default config
