import { createNextuiConfig } from '@repo/tailwind-config'
import { colors, fontSize, backgroundImage } from './src/themes/index'

/** @type {import('tailwindcss').Config} */
const config = createNextuiConfig({ colors, fontSize, backgroundImage })

export default {
  ...config,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
}
