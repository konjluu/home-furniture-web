// //component con của component introduceProduct
import ImgProduct from "./describleComponent/imgProduct.js"
import InformationProduct from "./describleComponent/informationProduct.js"
import DetailedDescription from "./describleComponent/detailedDescription.js"
import {imgDescribe} from "./imgDescribe.js"

export default class DescribeProduct{
    $DescribeContainer;

    _Notification;
    _productAdded;
    _viewCart;

    $imgProduct;
    $informationProduct;
    $detailedDescription;

    _functionViewCart
    constructor(functionViewCart){
        this._functionViewCart=functionViewCart;
        this.$DescribeContainer=document.createElement("div");
        this._Notification=document.createElement("div");
        
        this.$imgProduct=document.createElement("div");
        this.$informationProduct=new InformationProduct(()=>{
            this.appendNotification()
        });

        this.$detailedDescription=new DetailedDescription();
    }

    viewCart=(()=>{
        console.log("viewCart")
        this._functionViewCart();
    })

    appendNotification(){
        const productAdded=document.createElement("p");
        productAdded.textContent="Bàn ăn gia đình đã được thêm vào giỏ hàng";

        const viewCart=document.createElement("button");
        viewCart.textContent="Xem giỏ hàng";
        viewCart.setAttribute(
            "class",
            " bg-gray-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
          );
        viewCart.addEventListener("click",this.viewCart);


        const Notification=document.createElement("div");
        Notification.setAttribute(
            "class",
            "bg-slate-300"
          );


        Notification.appendChild(productAdded);
        Notification.appendChild(viewCart);
        this._Notification.appendChild(Notification);
        
    }

    render(container){
        // this.$Notification.appendChild(this.$productAdded);
        // this.$Notification.appendChild(this.$viewCart);

        const pic1= new ImgProduct(imgDescribe.picItem1[0]);
        const pic2= new ImgProduct(imgDescribe.picItem1[1]);
        const pic3= new ImgProduct(imgDescribe.picItem1[2]);
        const pic4= new ImgProduct(imgDescribe.picItem1[3]);
        const pic5= new ImgProduct(imgDescribe.picItem1[4]);
        pic1.render(this.$imgProduct);
        pic2.render(this.$imgProduct);
        pic3.render(this.$imgProduct);
        pic4.render(this.$imgProduct);
        pic5.render(this.$imgProduct);

        this.$DescribeContainer.appendChild(this._Notification);
        this.$DescribeContainer.appendChild(this.$imgProduct);
        this.$informationProduct.render(this.$DescribeContainer);
        this.$detailedDescription.render(this.$DescribeContainer);
        container.appendChild(this.$DescribeContainer);
        

    }
}