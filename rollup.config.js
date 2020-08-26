import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import pkg from './package.json';

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: pkg.name }
  ],
  plugins: [
    svelte({
      include: 'src/**/*.svelte',
      dev: true
    }),
    resolve(),
    commonjs(),
    !production && livereload('public')
  ]
};
