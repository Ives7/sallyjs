import { join, resolve } from "path"
import git from "simple-git"
import { copy, writeFile } from "fs-extra"
const { spawn } = require("child_process")

const getPkg = (dest: string) => {
  try {
    return require(join(dest, "package.json"))
  } catch (e) {
    return {} as any
  }
}

export const pro = async (name: string) => {
  const cwd = resolve(name)
  const src = join(__dirname, "../templates/root-project")
  try {
    await copy(src, cwd)

    const pkg = getPkg(cwd)

    pkg.name = name

    await writeFile(
      join(cwd, "package.json"),
      JSON.stringify(pkg, undefined, 2)
    )

    await git().cwd(cwd).init()

    const command = spawn("yarn", ["install"], {
      stdio: "inherit",
      cwd,
    })

    command.on("close", () => {})
  } catch (e) {
    console.log(e)
  }
}
