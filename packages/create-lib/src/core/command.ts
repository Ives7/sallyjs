import { Command } from "commander"
import { version } from "../../package.json"

export const command = new Command()

command.version(version)
