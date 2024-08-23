import { hexToRGBA } from "./functions.js";

const vbuckIcon = "https://fortnite-api.com/images/vbuck.png";

export class bundleBlock {
    constructor(item) {
        this.item = item;
    }

    putInHTML(item) { 
        const containerInsert = document.querySelector(".container");
        const containerItemUnique = document.createElement("div");
        containerItemUnique.classList.add("itemOfCategory");
        containerInsert.appendChild(containerItemUnique);

            
        containerItemUnique.style.border = "2px solid #" + item.colors.a;
          
        const itemName = document.createElement("h2");
        itemName.classList.add("itemName");
        itemName.innerText = item.category;
          
        if(item.colors.a === item.colors.b) {
            itemName.style.color = "black";
        } else {
            itemName.style.color = "#" + item.colors.b;
        }
            
        containerItemUnique.appendChild(itemName);
            
        const itemImg = document.createElement("img");
        itemImg.id = "imageItem";
        itemImg.src = item.image;
        if(item.colors.b) {
            itemImg.style.boxShadow = 'inset -8px -200px 84px -11px ' + hexToRGBA(item.colors.a, 0.95);
        } else {
            itemImg.style.boxShadow = 'inset -8px -200px 84px -11px ' + hexToRGBA(item.colors.a, 0.95);
        }
        containerItemUnique.appendChild(itemImg);
            
        const priceVbucks = document.createElement("div");
        priceVbucks.classList.add("priceVbucks");
        containerItemUnique.appendChild(priceVbucks);
            
        const imgVbucks = document.createElement("img");
        imgVbucks.src = vbuckIcon;
        priceVbucks.appendChild(imgVbucks);
            
        const price = document.createElement("p");
        price.innerText = item.price;
        priceVbucks.appendChild(price);   

        const containerShadow = document.createElement("div");
        containerShadow.classList.add("itemShadow");
        containerItemUnique.appendChild(containerShadow);
        containerItemUnique.style.boxShadow = 'inset 10px -170px 50px -102px ' + hexToRGBA(item.colors.a, 0.95);
    }
}


let itensAgrupados = [];
export class NormalBlock {
    constructor(item) {
        this.item = item;
    }

    putInHTML(item) {
        itensAgrupados.push(item);
    }
}

let itensOrganizados = {};
export function agrupar() {
    itensOrganizados = itensAgrupados.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
          }
          acc[item.category].push(item);
          
          return acc;
    }, {});
}
console.log(itensOrganizados);

export function putInHTMLNormal() {
    Object.entries(itensOrganizados).forEach(([category, items]) => {
        console.log(category, items);
        
    const containerInsert = document.querySelector(".container-category");
    let nameH3 = document.createElement("h2");
    nameH3.innerText = category;
    nameH3.classList.add("categoryName");
    containerInsert.appendChild(nameH3);

    const containeritemsGroup = document.createElement("div");
    containeritemsGroup.classList.add("itemsGroup");
    containerInsert.appendChild(containeritemsGroup);

    items.forEach(function (item) {
        let colorOne = item.colors.a;
        let colorTwo = item.colors.b;

        let colorOneRGBA = (colorOne, 0.85);

        const containerItemUnique = document.createElement("div");
        containerItemUnique.classList.add("itemOfCategory");
        containeritemsGroup.appendChild(containerItemUnique);

        containerItemUnique.style.border = "2px solid #" + colorTwo;

        const itemName = document.createElement("h2");
        itemName.classList.add("itemName");
        itemName.innerText = item.nome;
        itemName.style.color = "#" + colorTwo;
        itemName.style.backgroundColor = colorOne;
        containerItemUnique.appendChild(itemName);

        const itemImg = document.createElement("img");
        itemImg.id = "imageItem";
        itemImg.src = item.image;
        containerItemUnique.appendChild(itemImg);

        const priceVbucks = document.createElement("div");
        priceVbucks.classList.add("priceVbucks");
        containerItemUnique.appendChild(priceVbucks);

        const imgVbucks = document.createElement("img");
        imgVbucks.src = vbuckIcon;
        priceVbucks.appendChild(imgVbucks);

        const price = document.createElement("p");
        price.innerText = item.price;
        priceVbucks.appendChild(price);
    });





    }
)}
