import app from "../index.js"
export default class LivingRoom{
    $urlImg;
    $saleButton;
    $titleProduct;
    $price;
    $buttonBuy;

    $productItem;

    constructor(_srcImg,_title,_price){
        this.$productItem=document.createElement("div");
        this.$productItem.setAttribute(
            "class",
            "flex-1 box-content pb-3 px-1 pt-1 m-2 hover:shadow-lg focus:cursor-pointer duration-300 ease-in border border-solid text-center"
        );
        
        this.$saleButton=document.createElement("h3");
        this.$saleButton.textContent="Giảm Giá";
        this.$saleButton.setAttribute(
            "class",
            "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded-full"
        );

        this.$urlImg=document.createElement("img");
        this.$urlImg.src=_srcImg;
        this.$urlImg.setAttribute("class", "w-64 h-64 object-cover hover:scale-110 duration-300");
        this.$urlImg.addEventListener("click",this.handleIntroProduct);

        this.$titleProduct=document.createElement("h2");
        this.$titleProduct.textContent=_title;
        this.$titleProduct.setAttribute("class", " font-normal mt-1 text-xl");
        
        this.$price=document.createElement("h4");
        this.$price.textContent=_price;
        this.$price.setAttribute("class", "text-red-600 font-bold");
        

        this.$buttonBuy=document.createElement("submit");
        this.$buttonBuy.textContent="Mua hang";
        this.$buttonBuy.setAttribute(
            "class",
            "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
          );
        // this.$buttonBuy.addEventListener("submit",this.handleSubmit)

    }

    handleIntroProduct=(()=>{
        app.handleClickProduct();
        console.log("click");
    })

    // handleSubmit=(()=>{

    // })

    render(container){
        this.$productItem.appendChild(this.$urlImg);
        this.$productItem.appendChild(this.$saleButton);
        this.$productItem.appendChild(this.$titleProduct);
        this.$productItem.appendChild(this.$price);
        this.$productItem.appendChild(this.$buttonBuy);

        container.appendChild(this.$productItem);
    }
}