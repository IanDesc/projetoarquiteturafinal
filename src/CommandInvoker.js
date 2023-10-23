export default class CommandInvoker {
  constructor(command) {
    this.command = command;
  }

  invoke(file) {
    return this.command.execute(file);
  }
}
