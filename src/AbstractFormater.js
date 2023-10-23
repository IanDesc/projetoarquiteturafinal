import Command from "./Command.js";

export default class AbstractFormater extends Command {
  execute(cities) {
    throw new Error("Should implement execute method...");
  }
}
