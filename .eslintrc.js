module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'no-console': 0
  }
};
