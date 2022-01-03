import Header from "./component/headerPage.js";
import TitleAddressRoom from "./component/titleAddressRoom.js";
import LivingRoom from "./component/livingRoom.js";
import IntroProduct from "./component/introduceProduct.js";
import Footer from "./component/footerPage.js";
import ViewCart from "./component/viewCartContainer.js";
import {livingRoom} from "./component/API.js";

class APP{
  $appContainer;

  $head;
  $titleAddress; 
  $livingRoom;
  $foot;
  
  $middleScreen;           //total :listProdct or introduceProduct or viewCart
  $titleAndMiddleScreen;   //total :addresd and middleScreen

  $introProduct;
  $viewCart;
  $id;
  constructor(){
    this.$appContainer=document.createElement("div");

    this.$head=new Header();
    this.$titleAddress=new TitleAddressRoom();
    this.$foot=new Footer();
    this.$livingRoom= document.createElement("div");
    this.$livingRoom.setAttribute('class', "grid grid-cols-4");
    
    this.$middleScreen=document.createElement("div");
    
    this.$titleAndMiddleScreen=document.createElement("div");
    this.$titleAndMiddleScreen.setAttribute(
      "class",
      "w-2/3 flex flex-col justify-center items-center m-auto mb-15 mx-auto"
      );
      
    this.items= livingRoom.map(room=>new LivingRoom(room,this.handleClickProduct));

    console.log(this.items,"abc")
      // this._item1= new LivingRoom("./IMG/item1/1.jpeg",
      // "Bàn ăn gia đình",
      // "2,799,000.00",1,this.handleClickProduct);
      // this._item2= new LivingRoom('./IMG/item2/1.jpeg',
      // "Bàn ăn chung cư",
      // "2,799,000.00",2,this.handleClickProduct);
      // this._item3= new LivingRoom('./IMG/item3/1.jpeg',
      // "Bàn khách gia đình",
      // "2,799,000.00",3,this.handleClickProduct);
      // this._item4= new LivingRoom('./IMG/item4/1.jpeg',
      // "Bàn trang điểm",
      // "2,799,000.00",4,this.handleClickProduct);
      // this._item5= new LivingRoom('./IMG/item5/1.jpeg',
      // "Đồ gia dụng gia đình",
      // "2,799,000.00",5,this.handleClickProduct);
      // this._item6= new LivingRoom('./IMG/item6/1.jpeg',
      // "Ghế Sofa phòng khách",
      // "2,799,000.00",6,this.handleClickProduct);
      // this._item7= new LivingRoom('./IMG/item7/1.jpeg',
      // "Nhà vệ sinh",
      // "2,799,000.00",7,this.handleClickProduct);
      // this._item8= new LivingRoom('./IMG/item8/1.jpeg',
      // "Nội thất văn phòng 01",
      // "2,799,000.00",8,this.handleClickProduct);

      this.$id=0;
      this.$viewCart=new ViewCart();
    }

  handleClickViewCart=()=>{
    this.$middleScreen.innerHTML ="";
    this.$viewCart.render(this.$middleScreen);
  }
  
  handleClickProduct=(_id)=>{
    this.$introProduct=new IntroProduct(this.handleClickViewCart,_id)
    this.$middleScreen.innerHTML ="";
    this.$introProduct.render(this.$middleScreen);
  }

  backToLivingroom=()=>{
    this.$middleScreen.innerHTML ="";
    this.$middleScreen.appendChild(this.$livingRoom);
  }

  render(container){
    this.$head.render(this.$appContainer);
    this.items.forEach(room=>room.render(this.$livingRoom));
    // this._item1.render(this.$livingRoom);
    // this._item2.render(this.$livingRoom);
    // this._item3.render(this.$livingRoom);
    // this._item4.render(this.$livingRoom);
    // this._item5.render(this.$livingRoom);
    // this._item6.render(this.$livingRoom);
    // this._item7.render(this.$livingRoom);
    // this._item8.render(this.$livingRoom);
    this.$middleScreen.appendChild(this.$livingRoom);

    this.$titleAddress.render(this.$titleAndMiddleScreen);
    this.$titleAndMiddleScreen.appendChild(this.$middleScreen);

    this.$appContainer.appendChild(this.$titleAndMiddleScreen);
    this.$foot.render(this.$appContainer);

    container.appendChild(this.$appContainer);

  }
}
const main=document.getElementById("root")
const app=new APP();
app.render(main)
export default app;



 


  



