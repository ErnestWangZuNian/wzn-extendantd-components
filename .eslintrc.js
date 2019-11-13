module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  globals: {
    React: true,
    ReactDOM: true,
    PropTypes: true,
    antd: true,
    Util: true,
    Api: true,
  },
  parser: 'babel-eslint',
  rules: {
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-console': 0,
    'import/no-dynamic-require': 0,
    "import/prefer-default-export": 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/sort-comp': 0
  },
};
