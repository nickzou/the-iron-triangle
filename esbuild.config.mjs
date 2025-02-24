import * as esbuild from "esbuild";
import { globSync } from "glob";
import * as dotenv from "dotenv";

dotenv.config();

const themeName = process.env.THEME_NAME ?? "base-theme";

const entryPoints = globSync("./src/ts/**/*.ts", { ignore: "./src/ts/**/*.d.ts" });

await esbuild.build({
    entryPoints,
    bundle: true,
    minify: false,
    sourcemap: true,
    outdir: `./web/wp-content/themes/${themeName}/js`,
});
