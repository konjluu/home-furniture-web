// import InputQuantily from "../InputQuantily.js";
export default class InformationOfPurchasedProduct {
    informationOfPurchasedProduct_Container;

    itemDeleteButton;
    illustration;
    nameProduct;
    cost;
    quantily;
    total;

    _getInputValue;
    constructor(getInputValue) {
        this._getInputValue = getInputValue;

        this.informationOfPurchasedProduct_Container = document.createElement("div");

        this.itemDeleteButton = document.createElement("button");

        this.illustration = document.createElement("img");
        this.illustration.src = "./IMG/item1/1.jpeg";
        this.illustration.id = 1;
        this.illustration.setAttribute(
            "class",
            "w-10 h-10 object-cover hover:scale-110 duration-300"
        );
        // this.illustration.addEventListener("click", () =>
        //   _handleClickProduct(this.illustration.id)
        // );

        this.nameProduct = document.createElement("p");
        this.nameProduct.textContent = "Bàn ăn gia đình";

        this.cost = document.createElement("p");
        this.cost.textContent = "2500000";
        this.cost.value = 2500000;

        this.quantily = document.createElement("input");
        this.quantily.type = "number";
        this.quantily.value = this._getInputValue();
        console.log(this._getInputValue,"getvalue");

        this.quantily.min = 1;
        this.quantily.setAttribute(
            "class",
            "border border-gray-500");

        this.total = document.createElement("p");

    }

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
