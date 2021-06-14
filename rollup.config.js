import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import sveltePreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => {

	const isCircularWarning = warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message);
	const isMissingExportForPreload = (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message));
	const isOnBlurInsteadOfOnChangeWarning = warning.code === 'PLUGIN_WARNING' && warning.pluginCode && warning.pluginCode === 'a11y-no-onchange';
	const isMissingExplicitExportMode = warning.code === 'PREFER_NAMED_EXPORTS';

	return isCircularWarning // @sapper update 0.28 [related to TypeScript support]
		|| isMissingExportForPreload  // @sapper update 0.28 [related to TypeScript support]
		|| isOnBlurInsteadOfOnChangeWarning // https://github.com/sveltejs/svelte/issues/4946
		|| isMissingExplicitExportMode // https://github.com/sveltejs/sapper/issues/1332
		|| onwarn(warning);
}
	
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

const preprocess = sveltePreprocess({
	scss: {
		includePaths: ['src']
	},
	postcss: true // use postcss config
});

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'preventAssignment': true,
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess
			}),
			resolve({
				browser: true,
				dedupe
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],
		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'preventAssignment': true,
			}),
			svelte({
				generate: 'ssr',
				dev,
				preprocess
			}),
			resolve({
				dedupe
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'preventAssignment': true,
			}),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};
