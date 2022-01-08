//component giỏ hàng  
import ViewCardChild from "./viewCart/viewCardChild.js"
export default class ViewCart{
    $viewCartContainer;

    $viewCartChild //Thong so gio hang
    $calculateViewCart //tinh toan gio hang
    
    // _getInputValue
    // _id;
    // _name
    constructor(){
        // this._name=name
        // this._id=id
        // this._getInputValue=getInputValue;
        this.$viewCartContainer=document.createElement("div");

        this.$viewCartChild=new ViewCardChild();
        this.$calculateViewCart=document.createElement("div");
        
    }

    // pushData=()=>{
    //     return this.$viewCartChild.pushData;
    // }

    render(container){
        this.$viewCartChild.render(this.$viewCartContainer)
        this.$viewCartContainer.appendChild(this.$calculateViewCart)

        container.appendChild(this.$viewCartContainer);
    }
}