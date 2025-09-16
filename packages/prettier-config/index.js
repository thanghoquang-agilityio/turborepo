/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  endOfLine: "lf",
  quoteProps: "as-needed",
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
};
