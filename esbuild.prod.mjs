import * as esbuild from 'esbuild';
import { globSync } from 'glob';


const themeName = process.env.THEME_NAME || 'base-theme';

const entryPoints = globSync('./src/ts/**/*.ts', { ignore: './src/ts/**/*.d.ts' });

await esbuild.build({
  entryPoints,
  bundle: true,
  minify: true,
  sourcemap: false,
  outdir: `./web/wp-content/themes/${themeName}/js`,
});
