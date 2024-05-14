class itemInterface {
  getName() {}
  getPrice() {}
  getImage() {}
  getCategory() {}
}
export default class itemClass extends itemInterface{
    constructor(name, finalPrice, category, image){
      super();
      this.name = name;
      this.finalPrices = finalPrice;
      this.category = category;
      this.image = image;
    }
  }

  getName() {
    return this.name;
  }
  getPrice() {
    return this.finalPrice;
  }

  getImage() {
    return this.image;
  }
  getCategory() {
    return this.category;
  }
}
