import DescribeProduct from "./describeProduct.js";
export default class IntroProduct{
    $introContainer;

    $describe;
    $suggest;

    constructor(){
        this.$introContainer=document.createElement("div");

    
        this.$describe=new DescribeProduct()
        this.$suggest=document.createElement("div");
    }

    render(container){
        
        this.$describe.render(this.$introContainer);
        this.$introContainer.appendChild(this.$suggest);

        container.appendChild(this.$introContainer);
    }
}