module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.25%', 'not dead', 'not ie 11', 'not op_mini all'],
        },
      },
    ],
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/react'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
