import createConfig from '@repo/eslint-config'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default createConfig({ 
  isNext: true, 
  tsconfigRootDir: __dirname 
})
