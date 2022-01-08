export default class BillTotal{
    billTotalContainer;

    billTotal;

    constructor(_billTotal){
        console.log(_billTotal,"asdf")
        this.billTotalContainer=document.createElement("div");

        this.billTotal=document.createElement("div");
        this.billTotal.textContent=`${_billTotal}`
     

    }

    render(container){
        this.billTotalContainer.appendChild(this.billTotal);

        container.appendChild(this.billTotalContainer);
    }


}