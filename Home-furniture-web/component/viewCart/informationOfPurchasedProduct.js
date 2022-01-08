
export default class InformationOfPurchasedProduct {
    informationOfPurchasedProduct_Container;

    itemDeleteButton;
    illustration;
    nameProduct;
    cost;
    quantily;
    total;

    constructor(items) {
        this.informationOfPurchasedProduct_Container = document.createElement("div");

        this.itemDeleteButton = document.createElement("button");

        this.illustration = document.createElement("img");
        this.illustration.src=items.img;

        this.nameProduct = document.createElement("p");
        this.nameProduct.textContent=items.name;

        this.cost = document.createElement("p");
        this.cost.textContent=`${items.cost}`;

        this.quantily = document.createElement("input");
        this.quantily.textContent=items.quantily

        this.total = document.createElement("p");
        this.total.textContent=items.total;
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
