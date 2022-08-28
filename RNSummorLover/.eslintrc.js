module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'react/jsx-filename-extension': 'off',
        '@typescript-eslint/no-shadow': 0,
        'no-shadow': 'off',
        'no-undef': ['error', { typeof: true }],
        'one-var-declaration-per-line': [2, 'always'],
        'new-cap': 2,
        'no-case-declarations': 0,
        'no-console': ['error', { allow: ['error', 'info'] }],
        'jsx-a11y/anchor-is-valid': 0,
        eqeqeq: 2,
        camelcase: 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 0,
        'no-underscore-dangle': 0,
        'arrow-body-style': 0,
        'prefer-destructuring': ['error', { object: true, array: false }],
        'max-len': 0,
        'arrow-parens': 0,
        'consistent-return': 1,
        'semi-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        'lines-between-class-members': ['error', 'always'],
        'no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxEOF: 1,
          },
        ],
        'no-empty-function': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-unsafe-call': 0, // Cannot import module
        '@typescript-eslint/no-unsafe-return': 0, // Return from styled component,
      },
    },
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
};
