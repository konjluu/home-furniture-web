import {db,viewCartRef,viewCartMock} from "../constant/firebase.js"
import {
    getDocs,
    query
}from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import InformationOfPurchasedProduct from "../viewCart/informationOfPurchasedProduct.js"
import BillTotal from "../viewCart/_billTotal.js"
export default class ViewCardChild{
    $viewCardChildContainer;

    $parameter;  // gom : Sản phẩm, Giá, Số lượng, Tổng
    $nameProduct;
    $cost
    $quantily;
    $total;

    $informationOfPurchasedProduct; //thông tin của sản phẩm đã mua

    $updateViewCart;        //gom ; ma san pham, update gio hang
    $codeSale;
    $applyButton;
    $updateViewCartButton;

    $calculateViewCart;
    _billTotal;
    constructor() {
        
        this.$viewCardChildContainer=document.createElement("div");
        this.$viewCardChildContainer.setAttribute('class', "flex flex-col w-2/3 mx-auto")


        this.$parameter=document.createElement("div");
        this.$parameter.setAttribute('class','flex mt-20')

        this.$nameProduct=document.createElement("p");
        this.$nameProduct.textContent="Sản phẩm";
        this.$nameProduct.setAttribute('class','w-40')

        this.$cost=document.createElement("p");
        this.$cost.textContent="Giá";
        this.$cost.setAttribute('class','ml-10 w-40')

        this.$quantily=document.createElement("p");
        this.$quantily.textContent="Số lượng";
        this.$quantily.setAttribute('class','ml-10 w-40')

        this.$total=document.createElement("p");
        this.$total.textContent="Tổng";
        this.$total.setAttribute('class','ml-10 w-40')

        this.$informationOfPurchasedProduct=document.createElement("div");
        // this.$informationOfPurchasedProduct=new InformationOfPurchasedProduct();

        this.$updateViewCart=document.createElement("div");
        this.$updateViewCart.setAttribute('class', "mt-20")

        this.$codeSale=document.createElement("input");
        this.$codeSale.type="";
        this.$codeSale.placeholder="Mã ưu đãi";

        this.$applyButton=document.createElement("button");
        this.$applyButton.textContent="Áp dụng";

        this.$updateViewCartButton=document.createElement("button");
        this.$applyButton.textContent="Cập nhật giỏ hàng";

        // this.getAllData();

        this.$calculateViewCart=new BillTotal(this._billTotal);


    }

    async getAllData(){
        const querySnapshot = await getDocs(viewCartRef);
        this._billTotal=0;
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            const itemsOnviewCart=new InformationOfPurchasedProduct(doc.data());
            itemsOnviewCart.render(this.$informationOfPurchasedProduct);
            this._billTotal+=doc.data().total
        });
        console.log(_billTotal)
        return this._billTotal;
    }

    

    render(container){
        this.$parameter.appendChild(this.$nameProduct);
        this.$parameter.appendChild(this.$cost);
        this.$parameter.appendChild(this.$quantily);
        this.$parameter.appendChild(this.$total);


        this.$updateViewCart.appendChild(this.$codeSale);
        this.$updateViewCart.appendChild(this.$applyButton);
        this.$updateViewCart.appendChild(this.$updateViewCartButton);

        this.$viewCardChildContainer.appendChild(this.$parameter);
        this.$viewCardChildContainer.appendChild(this.$informationOfPurchasedProduct);
        // this.$informationOfPurchasedProduct.render(this.$viewCardChildContainer);
        this.$viewCardChildContainer.appendChild(this.$updateViewCart);

        this.$calculateViewCart.render(this.$viewCardChildContainer);

        container.appendChild(this.$viewCardChildContainer)

    }


}