/* eslint-disable no-undef */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  'ignorePatterns': ['!.*', '**/*.js', 'dist', 'node_modules'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'project': './tsconfig.json',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'jest',
    'import',
    'react',
    'react-native',
    'simple-import-sort'
  ],
  'rules': {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': ['error', { 'commonjs': true }],
    'import/no-extraneous-dependencies': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      },
    ],
    'no-extra-semi': ['error'],
    'sort-imports': ['warn', { 'ignoreCase': true, 'ignoreDeclarationSort': true }],
    '@typescript-eslint/no-use-before-define': 'warn',
    'react/jsx-filename-extension': [
      2,
      { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react-native/no-color-literals': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
  },
};
