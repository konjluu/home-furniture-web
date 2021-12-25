import app from "../index.js"
export default class Header{
    $headerContainer;

    $logoWeb;
    $topMenu;

    $menu;
    $livingRoom;
    $bedRoom;
    $diningRoom;
    $contact

    constructor(){
        this.$headerContainer=document.createElement("div");
        this.$headerContainer.setAttribute('class', "bg-white w-screen")

        this.$logoWeb=document.createElement("img");
        this.$logoWeb.src = "https://nt11.mediawz.com/wp-content/uploads/2021/07/Nt11.png";
        this.$logoWeb.setAttribute("class", "w-40 h-14 m-10");

        this.$topMenu=document.createElement("div");
        this.$topMenu.setAttribute('class', "w-2/3 m-auto flex justify-around items-center text-lg text-slate-50 ")


        this.$menu=document.createElement("h5");
        this.$menu.textContent="Trang chủ";

        this.$livingRoom=document.createElement("button");
        this.$livingRoom.textContent="Phòng khách";
        this.$livingRoom.addEventListener("click",this.backToLivingroom);

        this.$bedRoom=document.createElement("h5");
        this.$bedRoom.textContent="Phòng ngủ";

        this.$diningRoom=document.createElement("h5");
        this.$diningRoom.textContent="Phòng ăn";

        this.$contact=document.createElement("h5");
        this.$contact.textContent="Liên hệ";
    }

    backToLivingroom=(()=>{
        console.log("123");
        app.backToLivingroom();
    })

    render(container){
        this.$topMenu.appendChild(this.$logoWeb);
        this.$topMenu.appendChild(this.$menu);
        this.$topMenu.appendChild(this.$livingRoom);
        this.$topMenu.appendChild(this.$bedRoom);
        this.$topMenu.appendChild(this.$diningRoom);
        this.$topMenu.appendChild(this.$contact);
        
        this.$headerContainer.appendChild(this.$topMenu);

        container.appendChild(this.$headerContainer);

    }
}