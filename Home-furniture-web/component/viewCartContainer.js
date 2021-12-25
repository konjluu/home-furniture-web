//component giỏ hàng  

export default class ViewCart{
    $viewCartContainer;

    $viewCartChild //Thong so gio hang
    



    $calculateViewCart //tinh toan gio hang
    
    constructor(){
        this.$viewCartContainer=document.createElement("div");






        this.$viewCartChild=document.createElement("div");




        this.$calculateViewCart=document.createElement("div");
        
    }

    render(container){
        this.$viewCartContainer.appendChild(this.$viewCartChild)
        this.$viewCartContainer.appendChild(this.$calculateViewCart)

        container.appendChild(this.$viewCartContainer);
    }
}