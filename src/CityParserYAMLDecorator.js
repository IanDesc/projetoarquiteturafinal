import Parser from "./CityParser.js";

export default class YAMLParser extends Parser {
  parse(fileContent) {
    const lines = fileContent.split("\n");
    let data = [];
    let currentObject = {};
    for (let line of lines) {
      if (line.startsWith("Nome:")) {
        const value = line.split(":")[1].trim();
        currentObject["Nome"] = value;
        data.push(currentObject);
        currentObject = {};
      }
    }
    return data;
  }
}
