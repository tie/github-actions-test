export default {
  input: 'bin/action.mjs',
  output: {
    file: 'dist/index.cjs',
    format: 'cjs',
    sourcemap: 'inline',
  },
  strictDeprecations: true,
}
