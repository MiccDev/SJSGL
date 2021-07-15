const esbuild = require('esbuild');

esbuild
	.build({
		entryPoints: ['src/index.ts'],
		outdir: 'lib',
		bundle: true,
		minify: true,
		splitting: true,
		format: 'esm',
		target: ['esnext'],
		watch: true,
	})
	.catch(() => process.exit(1));
