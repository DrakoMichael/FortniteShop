import itemClass from "./itemClass.js";

export default function agruparPorCategoria(items) {
  return items.reduce((agrupado, it) => {
    const categoryName = it.getCategory();

    if (!agrupado[categoryName]) {
      agrupado[categoryName] = [];
    }

    agrupado[categoryName].push(it);

    return agrupado;
  }, {});
}

export function criarClasse(item) {
  let itemExport = new itemClass(item);
  itemExport.finalPrices = item.finalPrice;

  if (item.bundle) {
    itemExport.bundle = true;
    itemExport.name = item.bundle.name;
    itemExport.category = item.layout.category;
    itemExport.image = item.bundle.image;
  }
  if (!item.bundle) {
    itemExport.bundle = false;
    itemExport.name = item.items[0].name;
    itemExport.image = item.newDisplayAsset;

    if (item.layout) {
      itemExport.category = item.layout.category;
    }
    if (!item.layout) {
      itemExport.category = null;
    }
  }

  return itemExport;
}

export function testeCadaUm(lista) {
  console.log(lista);
}
