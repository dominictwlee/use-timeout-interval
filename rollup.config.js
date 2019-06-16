import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
// eslint-disable-next-line import/extensions
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    plugins: [babel({ exclude: 'node_modules/**' }), minify()],
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    external: ['react'],
  },
];
