import * as esbuild from 'esbuild';
import { globSync } from 'glob';

const themeName = process.env.THEME_NAME || 'base-theme';

const entryPoints = globSync('./src/ts/**/*.ts', { ignore: './src/ts/**/*.d.ts' });

let ctx = await esbuild.context({
  entryPoints,
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: `./web/wp-content/themes/${themeName}/js`,
  logLevel: 'info'
})

await ctx.watch();
