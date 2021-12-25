import Header from "./component/headerPage.js";
import TitleAddressRoom from "./component/titleAddressRoom.js";
import LivingRoom from "./component/livingRoom.js";
import IntroProduct from "./component/introduceProduct.js";
import Footer from "./component/footerPage.js";
import ViewCart from "./component/viewCartContainer.js";


class APP{
  appContainer;

  head;
  titleAddress; 
  livingRoom;
  foot;
  
  introProduct;
  middleScreen;           //total :listProdct or introduceProduct or viewCart
  titleAndMiddleScreen;   //total :addresd and middleScreen

  viewCart;

  constructor(){
    this.appContainer=document.createElement("div");

    this.head=new Header();
    this.titleAddress=new TitleAddressRoom();
    this.foot=new Footer();
    this.livingRoom= document.createElement("div");
    this.livingRoom.setAttribute('class', "grid grid-cols-4");

    this.introProduct=new IntroProduct(()=>{
      this.handleClickViewCart()
    });
    this.middleScreen=document.createElement("div");

    this.titleAndMiddleScreen=document.createElement("div");
    this.titleAndMiddleScreen.setAttribute(
        "class",
        "w-2/3 flex flex-col justify-center items-center m-auto mb-15 mx-auto"
      );
    
    this.viewCart=new ViewCart();

  }

  handleClickViewCart(){
    this.middleScreen.innerHTML ="";
    this.viewCart.render(this.middleScreen);

  }
  
  handleClickProduct(){
    this.middleScreen.innerHTML ="";
    this.introProduct.render(this.middleScreen);

  }

  backToLivingroom(){
    this.middleScreen.innerHTML ="";
    this.middleScreen.appendChild(this.livingRoom);
  }

  render(container){
    this.head.render(this.appContainer);
    
    const item1= new LivingRoom("./IMG/item1/1.jpeg",
                            "Bàn ăn gia đình",
                            "2,799,000.00",1);
    const item2= new LivingRoom('./IMG/item2/1.jpeg',
                          "Bàn ăn chung cư",
                            "2,799,000.00",2);
    const item3= new LivingRoom('./IMG/item3/1.jpeg',
                            "Bàn khách gia đình",
                            "2,799,000.00",3);
    const item4= new LivingRoom('./IMG/item4/1.jpeg',
                            "Bàn trang điểm",
                            "2,799,000.00",4);
    const item5= new LivingRoom('./IMG/item5/1.jpeg',
                            "Đồ gia dụng gia đình",
                            "2,799,000.00",5);
    const item6= new LivingRoom('./IMG/item6/1.jpeg',
                            "Ghế Sofa phòng khách",
                            "2,799,000.00",6);
    const item7= new LivingRoom('./IMG/item7/1.jpeg',
                            "Nhà vệ sinh",
                            "2,799,000.00",7);
    const item8= new LivingRoom('./IMG/item8/1.jpeg',
                            "Nội thất văn phòng 01",
                            "2,799,000.00",8);
    item1.render(this.livingRoom);
    item2.render(this.livingRoom);
    item3.render(this.livingRoom);
    item4.render(this.livingRoom);
    item5.render(this.livingRoom);
    item6.render(this.livingRoom);
    item7.render(this.livingRoom);
    item8.render(this.livingRoom);
    this.middleScreen.appendChild(this.livingRoom);

    this.titleAddress.render(this.titleAndMiddleScreen);
    this.titleAndMiddleScreen.appendChild(this.middleScreen);

    this.appContainer.appendChild(this.titleAndMiddleScreen);
    this.foot.render(this.appContainer);

    container.appendChild(this.appContainer);

  }
}
const main=document.getElementById("root")
const app=new APP();
app.render(main)
export default app;



 


  


