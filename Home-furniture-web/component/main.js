import Header from "./headerPage.js";
import TitleAddressRoom from "./titleAddressRoom.js";
import Room from "./Room.js";
import IntroProduct from "./introduceProduct.js";
import Footer from "./footerPage.js";
import ViewCart from "./viewCartContainer.js";
import {livingRoom,diningroom,bedroom,titleAddressRoom} from "./API.js";
import HomePage from "./Home.js";
import CartModal from "./CartModal.js";

export default class Main{

  $appContainer;

  $head;
  $titleAddress; 
  $room;
  $foot;
  
  $middleScreen;           //total :(listProdct or introduceProduct or viewCart) and titleAddress
 
  $introProduct;
  $viewCart;
  $id;


  constructor(){
    this.$appContainer=document.createElement("div");

    this.$head=new Header();
    this.$head.$productModal.$guestroom.addEventListener("click", this.onGuestroomClick);
    this.$head.$productModal.$diningroom.addEventListener("click", this.onDiningroomClick);
    this.$head.$productModal.$bedroom.addEventListener("click", this.onBedroomClick);

    this.$cartModal = new CartModal();

    this.$foot=new Footer();
    this.$room= document.createElement("div");
    this.$room.setAttribute('class', "grid grid-cols-4");
    
    this.$middleScreen=document.createElement("div");
    

    this.$id=0;
    this.$home=new HomePage();
    }

  onHomeClick = (e) => {
    e.preventDefault();
    this.$middleScreen.innerHTML ="";
    this.$home.render(this.$middleScreen);

  }

  onGuestroomClick = () => {
    this.$middleScreen.innerHTML ="";
    this.$room.innerHTML=""
    this.items= livingRoom.map(room=>new Room(room,this.handleClickProduct));
    this.items.forEach(room=>room.render(this.$room));
    this.$titleAddress=new TitleAddressRoom("Phòng khách");
    this.$titleAddress.render(this.$middleScreen);
    this.$middleScreen.appendChild(this.$room);

  }

  onDiningroomClick = () => {
    this.$middleScreen.innerHTML ="";
    this.$room.innerHTML=""
    this.items= diningroom.map(room=>new Room(room,this.handleClickProduct));
    this.items.forEach(room=>room.render(this.$room));
    this.$titleAddress=new TitleAddressRoom("Phòng an");    
    this.$titleAddress.render(this.$middleScreen);
    this.$middleScreen.appendChild(this.$room);
  }

  onBedroomClick = () => {  
    
    this.$middleScreen.innerHTML ="";
    this.$room.innerHTML=""
    this.items= bedroom.map(room=>new Room(room,this.handleClickProduct));
    this.items.forEach(room=>room.render(this.$room));
    this.$titleAddress=new TitleAddressRoom("Phòng ngủ");    
    this.$titleAddress.render(this.$middleScreen);
    this.$middleScreen.appendChild(this.$room);
    // console.log(this.$middleScreen,"middle2")
    
  }

  handleClickViewCart=(quantily)=>{
    // console.log(quantily,"quantily");
    const viewCart=new ViewCart(quantily);  
    this.$middleScreen.innerHTML ="";
    viewCart.render(this.$middleScreen);
  }
  
  handleClickProduct=(_id)=>{
    this.$introProduct=new IntroProduct(this.handleClickViewCart,_id)
    this.$middleScreen.innerHTML ="";
    const _titleAddressRoom=titleAddressRoom[_id-1].name
    this.$titleAddress=new TitleAddressRoom(_titleAddressRoom); 
    this.$titleAddress.render(this.$middleScreen);
    this.$introProduct.render(this.$middleScreen);
  }

  

  render(mainContainer){
    this.$head.render(this.$appContainer);
    this.$middleScreen.appendChild(this.$home.render());
    this.$appContainer.appendChild(this.$middleScreen);
    this.$appContainer.appendChild(this.$cartModal.render());
    this.$foot.render(this.$appContainer);

    mainContainer.appendChild(this.$appContainer);
  }
}



 


  



