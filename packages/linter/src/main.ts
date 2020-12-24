import { ESLint } from "eslint"
import { resolve } from "path"
import { baseConfig } from "@/eslint.config"

async function main(fix: boolean = false) {
  const eslint = new ESLint({
    cwd: resolve(),
    extensions: [".ts", ".js"],
    baseConfig,
    fix,
  })

  try {
    const results = await eslint.lintFiles(["src/**/*"])
    const formatter = await eslint.loadFormatter(
      require.resolve("eslint-formatter-pretty")
    )

    console.log(formatter.format(results))
  } catch (e) {
    console.log(e)
  }
}
