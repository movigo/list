import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import * as meta from './package.json'

const name = meta.name.substr(1).replace('/', '-')

const config = {
  input: meta.module,
  external: ['@movigo/core'],
  output: {
    file: `dist/${name}.js`,
    name: name,
    format: 'umd',
    indent: false,
    extend: true,
    globals: {
      ['@movigo/core']: 'movigo'
    },
    banner: `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}.`,
  },
  plugins: [
    resolve({ extensions: ['.js'] }),
    commonjs()
  ]
}

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${name}.min.js`
    },
    plugins: [
      ...config.plugins,
      terser({
        keep_fnames: true,
        output: {
          preamble: config.output.banner
        }
      })
    ]
  }
]
