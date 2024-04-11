// Complete API documentation: https://dash.fortnite-api.com/
// The following languages are supported by most endpoints:
// ar / de / en / es / es-419 / fr / it / ja / ko / pl / pt-BR / ru / tr / zh-CN / zh-Hant

// !!!!!!! Some var names or other things is in Brazilian Portuguese, you need change exit text to your lenguage or create a function to change automatically !!!!!!! if you understand a basic about JS this not go a problem for you

const language = "pt-BR";
const apiUrl = `https://fortnite-api.com/v2/shop/br?language=${language}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsonData) => {
    //to show raw API return:
    // console.log(jsonData);

    //v-buck icon from API
    const VbuckIcon = jsonData.data.vbuckIcon;

    //you can change the date order in function setData (DD/MM/YYYY)
    const dataApi = jsonData.data.date;
    setData(dataApi);

    //just push all items(entries) from API to extractedData > entries: [], but unorganized way.
    //I did this so if you want to get an item separately, but i think you could remove it and go straight to the next .reduce function if you want
    let extractedData = {
      entries: [],
    };
    allEntries = jsonData.data.featured.entries;
    allEntries.forEach((element) => {
      extractedData.entries.push(element);
    });

    // This .reduce basically groupe all items(entries) per category name and sub-category
    // i recommend you see the return using console.log (just uncomment to see after this function)
    // if item name or category name is null, this function put text "Outros" instead. You can replace this text, like "others".
    const NoBundleGroupedPerCategory = extractedData.entries.reduce(
      (agrupado, item) => {
        const categoryName = item.layout.category || "Outros";
        const layoutName = item.layout.name || "Outros";

        if (!agrupado[categoryName]) {
          agrupado[categoryName] = {};
        }
        if (!agrupado[categoryName][layoutName]) {
          agrupado[categoryName][layoutName] = [];
        }
        agrupado[categoryName][layoutName].push(item);

        return agrupado;
      },
      {}
    );
    // console.log(NoBundleGroupedPerCategory);

    // this basically goes through all organized items list from the .reduce and put on the screen
    for (const categoryName in NoBundleGroupedPerCategory) {
      if (NoBundleGroupedPerCategory.hasOwnProperty(categoryName)) {
        // aqui pega a categoria Destaque/Suba no Palco/Originais Royale/Outros
        // console.log("Categoria mãe: " + categoryName);

        for (const layoutName in NoBundleGroupedPerCategory[categoryName]) {
          // aqui pega a sub-categoria Avatar/Lady Gaga/Destaque original/Festival das lanternas
          // console.log(layoutName);

          const itemList = NoBundleGroupedPerCategory[categoryName][layoutName];

          let items = {
            itemCategory: layoutName,
            itemList: [],
          };
          items.vBuckIcon = VbuckIcon;

          itemList.forEach(function (item) {
            let itemData = {};

            if (item.bundle) {
              itemData.name = item.bundle.name;
              itemData.price = item.finalPrice;
              itemData.isBundle = true;
            }
            if (!item.bundle) {
              itemData.name = item.items[0].name;
              itemData.price = item.finalPrice;
              itemData.isBundle = false;
            }

            const temp1 = item.newDisplayAsset;
            const temp2 = temp1.materialInstances;
            const backgroundImg = temp2[0].images.Background;
            const colorsBackground = temp2[0].colors;

            itemData.backgroundImg = backgroundImg;
            itemData.colorsBackground = colorsBackground;
            items.itemList.push(itemData);
          });
          showItem(items);
        }
      }
    }
  })
  .catch((error) => {
    console.error(error);
  });

function showItem(itemData) {
  console.log(itemData);

  // if (BundleCheck) {
  //   console.log(Name);
  //   console.log(Price);
  //   console.log(BackImg);
  //   console.log(Colors);
  // }
  // if (!BundleCheck) {
  //   console.log(Name);
  //   console.log(Price);
  //   console.log(BackImg);
  //   console.log(Colors);
  // }

  const containerInsert = document.querySelector(".container-category");
  let nameH3 = document.createElement("h2");
  nameH3.innerText = itemData.itemCategory;
  nameH3.classList.add("categoryName");
  containerInsert.appendChild(nameH3);

  const containeritemsGroup = document.createElement("div");
  containeritemsGroup.classList.add("itemsGroup");
  containerInsert.appendChild(containeritemsGroup);

  itemData.itemList.forEach(function (item) {
    let colorOne = item.colorsBackground.Background_Color_A;
    let colorTwo = item.colorsBackground.Background_Color_B;

    let colorOneRGBA = hexToRGBA(colorOne, 0.85);

    const containerItemUnique = document.createElement("div");
    containerItemUnique.classList.add("itemOfCategory");
    containeritemsGroup.appendChild(containerItemUnique);

    containerItemUnique.style.border = "2px solid #" + colorTwo;

    const itemName = document.createElement("h2");
    itemName.classList.add("itemName");
    itemName.innerText = item.name;
    itemName.style.color = "#" + colorTwo;
    itemName.style.backgroundColor = colorOneRGBA;
    itemName.style.bac;
    containerItemUnique.appendChild(itemName);

    const itemImg = document.createElement("img");
    itemImg.id = "imageItem";
    itemImg.src = item.backgroundImg;
    containerItemUnique.appendChild(itemImg);

    const priceVbucks = document.createElement("div");
    priceVbucks.classList.add("priceVbucks");
    containerItemUnique.appendChild(priceVbucks);

    const imgVbucks = document.createElement("img");
    imgVbucks.src = itemData.vBuckIcon;
    priceVbucks.appendChild(imgVbucks);

    const price = document.createElement("p");
    price.innerText = item.price;
    priceVbucks.appendChild(price);
  });
}

function setData(dateData) {
  const data = new Date(dateData);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const dataFormatada = ` ${dia < 10 ? "0" : ""}${dia}/${
    mes < 10 ? "0" : ""
  }${mes}/${ano}`;
  let dataHTML = document.querySelector(".dataLoja");
  dataHTML.innerHTML = dataFormatada;
}

function hexToRGBA(hex, alpha) {
  // Remova o '#' da cor hexadecimal
  hex = hex.replace("#", "");

  // Converta os valores hexadecimais para valores RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Retorna a cor no formato rgba
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
