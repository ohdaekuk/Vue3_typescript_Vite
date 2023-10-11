/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-watch-after-await': 'error',
    'vue/multi-word-component-names': 'off',
    // 'arrow-body-style': 'off',
    // 'prefer-arrow-callback': 'off',
    semi: ['error', 'always'],
    // indent: ['error', 2],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        useTabs: false,
        indent: 2,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 120,
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always',
      },
    ],
  },
};
