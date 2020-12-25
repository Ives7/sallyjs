import { copy, mkdir, writeFile } from "fs-extra"
import { join, resolve } from "path"

export const getPkg = () => {
  let pkg: any
  try {
    pkg = require(resolve("package.json"))
  } catch (e) {
    pkg = {} as any
  }
  return pkg
}

export const pack = async (target: string) => {
  const { spawn } = require("child_process")
  const pkg = getPkg()
  const fullName = `@${pkg.name || "unknown"}/${target}`
  const src = join(__dirname, "../templates/package")
  const dest = resolve(`packages/${target}`)
  try {
    await copy(src, dest)

    const packagePkgPath = join(dest, "package.json")
    const packagePkg = require(packagePkgPath)
    const command = spawn("npx", ["lerna", "bootstrap"], {
      stdio: "inherit",
    })

    packagePkg.name = fullName
    await writeFile(packagePkgPath, JSON.stringify(packagePkg, undefined, 2))
    command.on("close", () => {})
  } catch (e) {
    console.log(e)
  }
}
