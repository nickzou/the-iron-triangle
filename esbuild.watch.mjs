import * as esbuild from 'esbuild';
import glob from 'glob';

const themeName = process.env.THEME_NAME || 'base-theme';

const entryPoints = glob.sync('./src/ts/**/*.ts', { ignore: './src/ts/**/*.d.ts' });

let ctx = await esbuild.context({
  entryPoints,
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: `./web/wp-content/themes/${themeName}/js`,
  logLevel: 'info'
})

await ctx.watch();
