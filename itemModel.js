import { bundleBlock } from "./insertItemModel.js";

export class itemBundle{
  constructor(item) {
    this.item = item || null;
    this.nome = item.bundle.name;
    this.category = item.layout.name;
    this.price = item.regularPrice;
    this.image = item.bundle.image;
    this.colors = item.newDisplayAsset.materialInstances[0].colors;
  }

  pull(){
    const itemSaida = {
      category: this.nome,
      nome: this.category,
      price: this.price,
      image: this.image,
      colors: {
        a: this.colors.Background_Color_A,
        b: this.colors.Background_Color_B
      }
    };
    new bundleBlock().putInHTML(itemSaida);
  }
}

export class itemNormal {
  constructor(item) {
    this.item = item || null;
    this.nome = item.items[0].name;
    this.price = item.regularPrice;
    this.newDisplayAsset = item.newDisplayAsset || null;
    

    if (item.layout) {
      this.category = item.layout.name;
    } else {
      this.category = "Outros";
    }

    if(item.items[0].images.featured) {
      this.image = item.items[0].images.featured;
    } else {
      this.image = item.items[0].images.icon;
    }

    if(item.newDisplayAsset){
      this.colors = item.newDisplayAsset.materialInstances[0].colors;
    } else {
      this.colors = { 
        a: "#000000",
        b: "#000000"
      };
    }
  }

  pull(){
    //console.log(this.item);
    const itemSaida = {
      category: this.category,
      nome: this.nome,
      price: this.price,
      image: this.image,
      colors: this.colors
    };
    ///
  }
}

