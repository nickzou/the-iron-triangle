import * as esbuild from 'esbuild';
import glob from 'glob';


const themeName = process.env.THEME_NAME || 'base-theme';

const entryPoints = glob.sync('./src/ts/**/*.ts', { ignore: './src/ts/**/*.d.ts' });

await esbuild.build({
  entryPoints,
  bundle: true,
  minify: true,
  sourcemap: false,
  outdir: `./web/wp-content/themes/${themeName}/js`,
});
