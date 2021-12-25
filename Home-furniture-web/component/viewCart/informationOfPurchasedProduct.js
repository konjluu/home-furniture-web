export default class InformationOfPurchasedProduct{
    informationOfPurchasedProduct_Container;

    itemDeleteButton;
    illustration;
    nameProduct;
    cost;
    quantily;
    total;

    constructor(){
        this.informationOfPurchasedProduct_Container=document.createElement("div");

        this.itemDeleteButton=document.createElement("button");
        this.illustration=document.createElement("img");
        this.nameProduct=document.createElement("p");
        this.cost=document.createElement("p");        
        this.quantily=document.createElement("input");
        this.quantily.type="number";
        this.quantily.min=0;
        this.quantily.setAttribute(
            "class",
            "border border-gray-500");
        this.total=document.createElement("p");

    }

    render(container){
        this.informationOfPurchasedProduct_Container.appendChild(this.itemDeleteButton);
        this.informationOfPurchasedProduct_Container.appendChild(this.illustration);
        this.informationOfPurchasedProduct_Container.appendChild(this.nameProduct);
        this.informationOfPurchasedProduct_Container.appendChild(this.cost);
        this.informationOfPurchasedProduct_Container.appendChild(this.quantily);
        this.informationOfPurchasedProduct_Container.appendChild(this.total);

        container.appendChild(this.informationOfPurchasedProduct_Container);

    }
}