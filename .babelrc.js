// {
//   "presets": ["react", "es2015", "stage-0"],
//   "plugins": [
//     "react-hot-loader/babel",
//     "transform-decorators-legacy",
//     [
//       "transform-runtime",
//       {
//         "polyfill": false,
//         "regenerator": true
//       }
//     ]
//   ]
// }

const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const outputModule = process.env.OUTPUT_MODULE;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: outputModule || false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    env === 'test' && '@babel/plugin-transform-modules-commonjs',
  ].filter(Boolean),
};
