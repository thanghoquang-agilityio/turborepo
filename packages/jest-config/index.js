/** @typedef {import('jest').Config} Config */
import nextJest from 'next/jest'

/**
 * Shared Jest config. Set `isNext` to true for Next.js projects.
 * @param {{ isNext?: boolean, rootDir?: string }} [options]
 * @returns {Config}
 */
export default function createJestConfig(options = {}) {
  const { isNext = false, rootDir = '<rootDir>' } = options

  /** @type {Config} */
  const base = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    moduleNameMapper: {
      '^@/(.*)$': `${rootDir}/src/$1`,
    },
    testEnvironment: 'jsdom',
  }

  if (!isNext) return base

  const withNext = nextJest({ dir: './' })
  return withNext(base)
}


