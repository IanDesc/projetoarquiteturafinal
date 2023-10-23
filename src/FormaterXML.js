import AbstractFormater from "./AbstractFormater.js";

export default class FormaterXML extends AbstractFormater {
  execute(cities) {
    let xml = "<cities>";
    cities.forEach((city) => {
      xml += `<city id="${city.ID}">`;
      xml += `<name>${city.Nome}</name>`;
      xml += `<state>${city.Estado}</state>`;
      xml += "</city>";
    });
    xml += "</cities>";
    return xml;
  }
}
