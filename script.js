import { itemBundle, itemNormal } from './models/itemModel.js';
import { config } from './models/config.js';
import { agrupar, putInHTMLNormal } from './models/insertItemModel.js';

fetch(config.apiUrl + config.apiLanguage)
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.data.featured.entries.forEach(element => {
      if (element.bundle) {
        new itemBundle(element).pull(element);
      } 
      if (element.bundle == null) {
        new itemNormal(element).pull(element);
      }
    });
    agrupar();
    putInHTMLNormal();
  })
  .catch((error) => {
    console.error(error);
  });