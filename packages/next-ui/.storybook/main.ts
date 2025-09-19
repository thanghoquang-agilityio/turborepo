import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Add TypeScript support
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      })

      // Update CSS rule to include PostCSS processing
      const cssRuleIndex = config.module.rules.findIndex((rule) =>
        rule && typeof rule === 'object' && rule.test && rule.test.toString().includes('.css')
      )
      
      if (cssRuleIndex !== -1) {
        const cssRule = config.module.rules[cssRuleIndex]
        if (cssRule && typeof cssRule === 'object' && Array.isArray(cssRule.use)) {
          // Replace the existing CSS rule with one that includes PostCSS
          config.module.rules[cssRuleIndex] = {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    config: require.resolve('../postcss.config.js'),
                  },
                },
              },
            ],
          }
        }
      }
    }
    return config
  },
}

export default config
