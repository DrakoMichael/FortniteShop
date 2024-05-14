// Complete API documentation: https://dash.fortnite-api.com/
// The following languages are supported by most endpoints:
// ar / de / en / es / es-419 / fr / it / ja / ko / pl / pt-BR / ru / tr / zh-CN / zh-Hant

import itemClass from "./itemClass.js";
import agruparPorCategoria from "./scripts.js";
import exibirHtml from "./scripts.js";
import { criarClasse } from "./scripts.js";
import { testeCadaUm } from "./scripts.js";

export default function fetchAPI() {
  const language = "pt-BR";
  const apiUrl = `https://fortnite-api.com/v2/shop/br?language=${language}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((jsonData) => {
      //to show raw API return:
      console.log(jsonData);
      const entries = jsonData.data.featured.entries;

      let items = [];
      entries.forEach((element) => {
        items.push(criarClasse(element));
      });

      let organizeditens = [];
      organizeditens.push(agruparPorCategoria(items));

      testeCadaUm(organizeditens[0]);
    })
    .catch((error) => {
      console.error(error);
    });
}
