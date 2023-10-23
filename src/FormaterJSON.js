import AbstractFormater from "./AbstractFormater.js";

export default class FormaterJSON extends AbstractFormater {
  execute(cities) {
    const json = JSON.stringify(cities, null, 2);
    return json;
  }
}
