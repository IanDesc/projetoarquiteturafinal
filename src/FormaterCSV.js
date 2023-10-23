import AbstractFormater from "./AbstractFormater.js";

export default class FormaterCSV extends AbstractFormater {
  execute(cities) {
    let csv = "ID,Nome,Estado\n";
    cities.forEach((city) => {
      csv += `${city.ID},${city.Nome},${city.Estado}\n`;
    });
    return csv;
  }
}
