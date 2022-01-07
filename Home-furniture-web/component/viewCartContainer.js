//component giỏ hàng  
import ViewCardChild from "./viewCart/viewCardChild.js"
export default class ViewCart{
    $viewCartContainer;

    $viewCartChild //Thong so gio hang
    $calculateViewCart //tinh toan gio hang
    
    _getInputValue
    constructor(getInputValue){
        this._getInputValue=getInputValue;
        this.$viewCartContainer=document.createElement("div");

        this.$viewCartChild=new ViewCardChild(this._getInputValue);
        this.$calculateViewCart=document.createElement("div");
        
    }

    render(container){
        this.$viewCartChild.render(this.$viewCartContainer)
        this.$viewCartContainer.appendChild(this.$calculateViewCart)

        container.appendChild(this.$viewCartContainer);
    }
}