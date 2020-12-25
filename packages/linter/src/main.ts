//import { ESLint } from "eslint"
//import { resolve } from "path"
//import { baseConfig } from "@/eslint.config"
//
//import { Command } from "commander"
//
//const program = new Command()
//
//program
//  .command("lint")
//  .option("-f, --fix", "boolean")
//  .action(main)
//  .parse(process.argv)
//
//async function main(program: any) {
//  const eslint = new ESLint({
//    cwd: resolve(),
//    fix: program.fix,
//    baseConfig,
//  })
//
//  try {
//    const results = await eslint.lintFiles(["**/*.{js,ts,jsx,tsx}"])
//    const formatter = await eslint.loadFormatter(
//      require.resolve("eslint-formatter-pretty")
//    )
//    console.log(formatter.format(results))
//    if (program.fix) {
//      await ESLint.outputFixes(results)
//      const errorResults = await ESLint.getErrorResults(results)
//      if (errorResults.length) {
//      }
//      console.log("fix done!")
//    }
//  } catch (e) {
//    console.log(e)
//    console.error(e)
//    process.exit(1)
//  }
//}
