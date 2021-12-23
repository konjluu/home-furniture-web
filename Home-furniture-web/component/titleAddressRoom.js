export default class TitleAddressRoom{
    $titleAddress;

    constructor(){
        this.$titleAddress=document.createElement("h1");
        this.$titleAddress.textContent="Phòng ngủ";
        this.$titleAddress.setAttribute("class","text-4xl text-slate-500")
    }

    render(container){
        container.appendChild(this.$titleAddress);
    }
}