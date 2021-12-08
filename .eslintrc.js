module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    // Recommended ts/es-lint rules
    'plugin:@typescript-eslint/recommended',
    // Disable ESLint rules conflicting with Prettier
    'prettier/@typescript-eslint',
    // Displays Prettier  errors as ESLint errors - must be last plugin in 'extends' array
    'plugin:prettier/recommended',
  ],
};
