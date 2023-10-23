import Parser from "./CityParser.js";
import { parseStringPromise } from "xml2js";

export default class XMLParser extends Parser {
  async parse(fileContent) {
    const xmlData = await parseStringPromise(fileContent, {
      explicitArray: false,
    });
    const data = xmlData.cidades.cidade.map((item) => {
      return { Nome: item.Nome };
    });
    console.log(data);
    return data;
  }
}
