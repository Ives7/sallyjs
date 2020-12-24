#!/usr/bin/env node
import { Command } from "commander"
import { command } from "@/core/command"
import { g } from "@/core/commands/g"
import { version } from "../package.json"

g(command as Command)
command.version(version)
command.parse(process.argv)
