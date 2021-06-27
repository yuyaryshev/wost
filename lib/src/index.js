"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const commander_1 = require("commander");
const link_1 = __importDefault(require("./commands/link"));
const unlink_1 = __importDefault(require("./commands/unlink"));
const sync_1 = __importDefault(require("./commands/sync"));
const package_json_1 = __importDefault(require("../package.json"));
const program = new commander_1.Command();
const main = (argv) => {
    program
        .version(package_json_1.default.version)
        .addCommand(link_1.default)
        .addCommand(unlink_1.default)
        .addCommand(sync_1.default);
    program.parse(argv);
    console.log(argv);
};
exports.main = main;