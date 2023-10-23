import Parser from "./CityParser.js";

export default class CSVParser extends Parser {
  parse(fileContent) {
    const rows = fileContent.split("\n");
    const headers = rows[0].split(",");
    const data = rows.slice(1).map((row) => {
      const values = row.split(",");
      return headers.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
    });
    console.log(data);
    return data;
  }
}
