
import { itemBundle, itemNormal } from './itemModel.js';
import { config } from './config.js';

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
  })
  .catch((error) => {
    console.error(error);
  });