import FormaterXML from "./src/FormaterXML.js";
import FormaterHTML from "./src/FormaterHTML.js";
import FormaterTXT from "./src/FormaterTXT.js";
import CitiesReporter from "./src/CitiesReporter.js";
import FormaterCSV from "./src/FormaterCSV.js";
import FormaterJSON from "./src/FormaterJSON.js";

const [cmd, script, param1, param2] = process.argv,
  // cidades-2.json
  // cidades.csv
  // cidades.html
  // cidades.xml
  // cidades.YAML
  filename = `./data/${param2}`;

const formaterStrategies = {  //recebe o tipo de formatação nos parâmetros 
  html: new FormaterHTML(),
  txt: new FormaterTXT(),
  xml: new FormaterXML(),
  csv: new FormaterCSV(),
  json: new FormaterJSON(),
};

let extension = param2.split("."); //divide a string para pegar o tipo do arquivo 

let reporter = new CitiesReporter({
    formaterStrategy: formaterStrategies[param1],
    fileType: extension[1],
  }),
  output = reporter.report(filename);

console.log(output);

//Exemplo: Digitar node index.js + (Formato do arquivo que você quer ver) + (nome do arquivo do input)
           //Ler o arquivo em csv e tranformar ele em html digite "node index.js html cidades.csv"
          // Ler um JSON e ter o output em XML "node index.js xml cidades-2.json"
          
