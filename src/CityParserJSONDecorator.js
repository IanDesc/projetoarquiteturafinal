import Parser from "./CityParser.js";

export default class JSONParser extends Parser {
  parse(fileContent) {
    const data = JSON.parse(fileContent);
    return data;
  }
}
