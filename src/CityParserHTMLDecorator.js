import Parser from "./CityParser.js";

export default class HTMLParser extends Parser {
  parse(fileContent) {
    const lines = fileContent.split("\n");
    let rows = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith("<tr")) {
        let cells = [];

        while (!lines[i].trim().startsWith("</tr>")) {
          if (lines[i].trim().startsWith("<td")) {
            const cellContent = lines[i].trim().match(/<td>(.*?)<\/td>/)[1];
            cells.push(cellContent);
          }

          i++;
        }
        // Create an object for each row and add a 'Nome' property to it
        let rowObject = {
          Nome: cells[1],
        };
        rows.push(rowObject);
      }
    }
    // console.log(rows);
    return rows;
  }
}
