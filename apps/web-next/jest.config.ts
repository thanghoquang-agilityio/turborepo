/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const createJestConfig = require('@repo/jest-config')

module.exports = createJestConfig({ isNext: true, rootDir: '<rootDir>' })
