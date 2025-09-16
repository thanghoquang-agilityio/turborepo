/** @type {import("prettier").Config} */
module.exports = {
  ...require("./base.js"),
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  importOrder: [
    "^path$",
    "^vite$",
    "^@vitejs/(.*)$",
    "^react$",
    "^react-dom/client$",
    "^react/(.*)$",
    "^globals$",
    "^zod$",
    "^axios$",
    "^date-fns$",
    "^react-hook-form$",
    "^use-intl$",
    "^@radix-ui/(.*)$",
    "^@hookform/resolvers/zod$",
    "^@tanstack/react-query$",
    "^@tanstack/react-router$",
    "^@tanstack/react-table$",
    "<THIRD_PARTY_MODULES>",
    "^@/assets/(.*)",
    "^@/api/(.*)$",
    "^@/stores/(.*)$",
    "^@/lib/(.*)$",
    "^@/utils/(.*)$",
    "^@/constants/(.*)$",
    "^@/context/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/layouts/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/errors/(.*)$",
    "^@/components/(.*)$",
    "^@/features/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
