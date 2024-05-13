class itemInterface {
  getName() {}
  getPrice() {}
  getImage() {}
  getCategory() {}
}
export default class itemClass extends itemInterface {
  constructor(item) {
    super();
    this.finalPrice = item.finalPrice;

    if (item.bundle) {
      this.name = item.bundle.name;
      if (item.layout) {
        this.category = item.layout.category;
      } else {
        this.category = "Destaque";
      }

      if (item.newDisplayAsset) {
        this.image =
          item.newDisplayAsset.materialInstances[0].images.Background;
      } else {
        this.image = item.items[0].images.icon;
      }
    }

    if (!item.bundle) {
      this.name = item.items[0].name;

      if (item.layout) {
        this.category = item.layout.category;
      } else {
        this.category = "Destaque";
      }

      if (item.newDisplayAsset) {
        this.image =
          item.newDisplayAsset.materialInstances[0].images.Background;
      } else {
        this.image = item.items[0].images.icon;
      }
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
