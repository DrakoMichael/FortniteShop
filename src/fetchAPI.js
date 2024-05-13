// Complete API documentation: https://dash.fortnite-api.com/
// The following languages are supported by most endpoints:
// ar / de / en / es / es-419 / fr / it / ja / ko / pl / pt-BR / ru / tr / zh-CN / zh-Hant

export default function fetchAPI(){
        
const language = "pt-BR";
const apiUrl = `https://fortnite-api.com/v2/shop/br?language=${language}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        //to show raw API return:
        //console.log(jsonData);
        return jsonData.data.featured.entries;
        
      })
      .catch((error) => {
        console.error(error);
      });

}



