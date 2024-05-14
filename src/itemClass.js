export default class itemClass {
  constructor(name, finalPrice, category, image) {
    this.bundle = null;
    this.name = name;
    this.category = category;
    this.finalPrices = finalPrice;
    this.image = image;
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
