import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

// const plugins = [
//     typescript(),
//     babel.babel({
//         babelHelpers: 'bundled',
//         exclude: 'node_modules/**',
//         extensions: ['.ts'],
//         presets: ['@babel/preset-env'],
//         plugins: [
//             ['@babel/plugin-proposal-decorators', { legacy: true }],
//             '@babel/plugin-proposal-function-sent',
//             '@babel/plugin-proposal-export-namespace-from',
//             '@babel/plugin-proposal-numeric-separator',
//             '@babel/plugin-proposal-throw-expressions',
//             '@babel/plugin-transform-object-assign',
//         ],
//     }),
// ];

export default [
    // {
    //     input: './src/echo.ts',
    //     output: [
    //         { file: './dist/echo.js', format: 'esm' },
    //         { file: './dist/echo.common.js', format: 'cjs' },
    //     ],
    //     plugins,
    // },
    {
        input: './src/index.iife.ts',
        output: [{ file: './dist/echo.es.js', format: 'es' }],
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            babel.babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
            }),
        ],
    },
];
