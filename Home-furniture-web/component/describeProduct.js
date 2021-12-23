import ImgProduct from "./describleComponent/imgProduct.js"
export default class DescribeProduct{
    $DescribeContainer;

    $imgProduct;
    $informationProduct;

    constructor(){
        this.$DescribeContainer=document.createElement("div");

        this.$imgProduct=document.createElement("div");
        
        this.$informationProduct=document.createElement("div");
    }

    render(container){
        const pic1= new ImgProduct("./IMG/item1/1.jpeg");
        const pic2= new ImgProduct("./IMG/item1/2.jpeg");
        const pic3= new ImgProduct("./IMG/item1/3.jpeg");
        const pic4= new ImgProduct("./IMG/item1/4.jpeg");
        const pic5= new ImgProduct("./IMG/item1/5.jpeg");
        pic1.render(this.imgProduct);
        pic2.render(this.imgProduct);
        pic3.render(this.imgProduct);
        pic4.render(this.imgProduct);
        pic5.render(this.imgProduct);

        container.appendChild(this.imgProduct);
        





    }
}