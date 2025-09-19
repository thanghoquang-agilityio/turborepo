import { createNextuiConfig } from '@repo/tailwind-config'
import type { Config } from 'tailwindcss'

import { backgroundImage, colors, fontSize } from '@repo/next-ui/themes'

const baseConfig = createNextuiConfig({ colors, fontSize, backgroundImage })

const config: Config = {
  ...baseConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    '../../packages/next-ui/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/next-ui/node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
}
export default config
