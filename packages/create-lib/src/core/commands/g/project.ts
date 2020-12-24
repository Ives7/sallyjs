import { join, resolve } from "path"
import { copy, writeFile } from "fs-extra"

const getPkg = (dest: string) => {
  try {
    require(join(dest, "package.json"))
  } catch (e) {
    return {} as any
  }
}

export const pro = async (name: string) => {
  const cwd = resolve(name)
  const src = join(__dirname, "../templates/root-project")

  try {
    await copy(src, cwd)
    const { spawn } = require("child_process")

    const pkg = getPkg(cwd)
    const command = spawn("npx", ["lerna", "bootstrap"], {
      stdio: "inherit",
      cwd,
    })

    pkg.name = name

    await writeFile(
      join(cwd, "package.json"),
      JSON.stringify(pkg, undefined, 2)
    )

    command.on("close", () => {})
  } catch (e) {}
}
