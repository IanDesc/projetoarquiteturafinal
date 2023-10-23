import fs from "node:fs";
import CommandInvoker from "./CommandInvoker.js";
import Parser from "./CityParser.js";
import CSVParser from "./CityParserCSVDecorator.js";
import HTMLParser from "./CityParserHTMLDecorator.js";
import XMLParser from "./CityParserXMLDecorator.js";
import YAMLParser from "./CityParserYAMLDecorator.js";
import JSONParser from "./CityParserJSONDecorator.js";

const parserStrategies = {
  csv: new CSVParser(),
  html: new HTMLParser(),
  xml: new XMLParser(),
  yaml: new YAMLParser(),
  json: new JSONParser(),
};

export default class CitiesReporter {
  constructor({ formaterStrategy, fileType }) {
    this._invoker = new CommandInvoker(formaterStrategy);
    this._parser = parserStrategies[fileType];
  }

  _read(filename) {
    let fileContent = fs.readFileSync(filename, "utf-8");
    this._cities = this._parser.parse(fileContent);
  }

  report(filename) {
    this._read(filename);
    return this._invoker.invoke(this._cities);
  }
}
