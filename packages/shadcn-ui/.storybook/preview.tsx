import type { Preview } from '@storybook/react'
import React from 'react'

import '@repo/shadcn-ui/styles'
import { FontProvider } from '@repo/shadcn-ui/themes/font-provider'
import { ThemeProvider } from '@repo/shadcn-ui/themes/theme-provider'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <FontProvider>
          <div className="p-6">
            <Story />
          </div>
        </FontProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

export default preview


