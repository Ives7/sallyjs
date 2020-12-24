#!/usr/bin/env node
import { Command } from "commander"
import { command } from "@/core/command"
import { g } from "@/core/commands/g"

g(command as Command)
command.parse(process.argv)
