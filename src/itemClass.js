class itemInterface {
  getName(){}
  getPrice(){}
  getImage(){}
}

export default class itemBundle extends itemInterface{
    constructor(item) {
        super();
        this.name = item.bundle.name;
        this.finalPrice = item.finalPrice;
        this.image = item.newDisplayAsset.materialInstances[0].images.Background;
      } 

      getName(){
        return this.name;
      }
      getPrice(){
        return this.finalPrice;
      }

      getImage() {
        return this.image;
      }

}

export class normalItem extends itemInterface{
    constructor(item) {
      super();
      this.name = item.items[0].name;
      this.finalPrice = item.finalPrice;

      if(item.newDisplayAsset){
        this.image = item.newDisplayAsset.materialInstances[0].images.Background;
      } else {
        this.image = item.items[0].images.icon;
      }
    }

    getName(){
      return this.name;
    }
    getPrice(){
      return this.finalPrice;
    }

    getImage() {
      return this.image;
    }
}