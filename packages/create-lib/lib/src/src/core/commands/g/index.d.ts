import { Command } from "commander";
export interface GAction {
    (target: string): void;
}
export declare const g: (command: Command) => void;
