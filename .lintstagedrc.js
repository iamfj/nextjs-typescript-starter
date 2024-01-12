/**
 * @type {import('lint-staged').Options}
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['npx eslint --fix'],
  '*.{json,css,md}': ['npx prettier --write'],
  '*.prisma': ['npx prisma format'],
};
