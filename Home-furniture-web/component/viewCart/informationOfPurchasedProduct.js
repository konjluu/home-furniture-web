
// import { auth, viewCartonFirebase } from "../API.js";
// import {
//   doc,
//   deleteDoc,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
export default class InformationOfPurchasedProduct {
    informationOfPurchasedProduct_Container;

    itemDeleteButton;
    illustration;
    nameProduct;
    cost;
    quantily;
    total;

    // _getInputValue;
    // _id;
    // _name
    constructor() {
        this.informationOfPurchasedProduct_Container = document.createElement("div");

        this.itemDeleteButton = document.createElement("button");
        this.illustration = document.createElement("img");
        this.nameProduct = document.createElement("p");
        this.cost = document.createElement("p");
        this.quantily = document.createElement("input");
        this.total = document.createElement("p");

        // this._getInputValue = getInputValue;
        // this._id=id;
        // this._name=name;

        // this.informationOfPurchasedProduct_Container = document.createElement("div");

        // this.itemDeleteButton = document.createElement("button");

        // this.illustration = document.createElement("img");
        // const itemId=`item${this._id}`
        // this.illustration.src = "./IMG/"+itemId+"/1.jpeg"  ;  
        // // console.log(this.illustration.src,"src");
        // // this.illustration.id = 1;
        // this.illustration.setAttribute(
        //     "class",
        //     "w-10 h-10 object-cover hover:scale-110 duration-300"
        // );
        // // this.illustration.addEventListener("click", );

        // this.nameProduct = document.createElement("p");
        // this.nameProduct.textContent = this._name;

        // this.cost = document.createElement("p");
        // this.cost.textContent = "2500000";
        // this.cost.value = 2500000;

        // this.quantily = document.createElement("input");
        // this.quantily.type = "number";
        // this.quantily.min = 1;
        // this.quantily.value = this._getInputValue();
        // // console.log(this._getInputValue,"getvalue");
        // this.quantily.setAttribute(
        //     "class",
        //     "border border-gray-500");

        // this.total = document.createElement("p");
        // this.total.value=this.quantily.value*2500000;
        // this.total.textContent=`${this.total.value}`;

    }

    // pushData=()=>{
    //     const dataViewCart={
    //         img:this.illustration.src,
    //         name:this._name,
    //         cost:2500000,
    //         quantily: this.quantily.value,
    //         total: this.total.value,
    //         id:this._id
    //     }
    //     console.log(dataViewCart,"dataviwecart")      
    // }

    render(container) {
        this.informationOfPurchasedProduct_Container.appendChild(this.itemDeleteButton);
        this.informationOfPurchasedProduct_Container.appendChild(this.illustration);
        this.informationOfPurchasedProduct_Container.appendChild(this.nameProduct);
        this.informationOfPurchasedProduct_Container.appendChild(this.cost);
        this.informationOfPurchasedProduct_Container.appendChild(this.quantily);
        this.informationOfPurchasedProduct_Container.appendChild(this.total);

        container.appendChild(this.informationOfPurchasedProduct_Container);

    }
}
