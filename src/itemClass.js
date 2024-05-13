class itemInterface {
  getName(){}
  getPrice(){}
  getImage(){}
}

export default class itemBundle extends itemInterface{
    constructor(name, finalPrice, image) {
        this.name = bundle.name;
        this.finalPrice = finalPrice;
        this.image = newDisplayAsset.materialInstances[0].images.Background;
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
    constructor(name, finalPrice, image) {
      this.name = items[0].name;
      this.finalPrice = finalPrice;
      this.image = image;
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