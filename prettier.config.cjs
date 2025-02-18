module.exports = {
  plugins: ["prettier-plugin-tailwindcss", require.resolve("@trivago/prettier-plugin-sort-imports")],
  printWidth: 120,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@(api|hooks|providers|internationalization|components|pages|routes)/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
