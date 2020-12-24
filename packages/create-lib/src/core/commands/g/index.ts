import { Command } from "commander"
import { pro } from "./project"
import { pack } from "./package"

export interface GAction {
  (target: string): void
}

const actionMap: Record<string, GAction> = {
  pro,
  pack,
}

export const g = (command: Command) => {
  command
    .command("g <type> [name]")
    .description("创建文件")
    .action((type: string, name: string = "unknown") => {
      if (type in actionMap && typeof actionMap[type] === "function") {
        actionMap[type](name)
        return
      }
      throw new TypeError("搞出问题了！没有对应模式!!")
    })
}
