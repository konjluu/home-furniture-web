export default class Footer{
    $footContainer;

    $intro;
    $contact;
    $creator;

    constructor(){
        this.$footContainer=document.createElement("div");
        this.$footContainer.setAttribute("class","bg-cover bg-gray-800 flex flex-row")

        this.$intro=document.createElement("div");

        this.$contact=document.createElement("div");
        // this.$creator=document.createElement("p");

    }

    render(container){
        const titleIntro=document.createElement("h4");
        titleIntro.textContent="Gioi thieu";
        titleIntro.setAttribute("class","font-bold text-white")
        const contentIntro=document.createElement("p");
        contentIntro.textContent="NT11 Company chuyên thiết kế - thi công nội thất đa phong cách cho các dự án biệt thự, căn hộ, nhà phố, khách sạn, văn phòng công ty… Với đội ngũ thiết kế sáng tạo, nhiệt huyết và thi công chuyên nghiệp, nhiều kinh nghiệm, NT11 Company tự tin mang đến cho quý khách hàng những dự án kiến trúc - nội thất sang trọng, độc đáo, bền vững và đặc biệt với mức giá vô cùng cạnh tranh."
        contentIntro.setAttribute("class"," text-white")
        this.$intro.appendChild(titleIntro);
        this.$intro.appendChild(contentIntro);

        const titleContact=document.createElement("h4");
        titleContact.textContent="Lien he";
        titleContact.setAttribute("class","font-bold text-white")
        const contentContact=document.createElement("p");
        contentContact.textContent="congluu-123456789";
        contentContact.setAttribute("class","text-white");
        this.$contact.appendChild(titleContact);
        this.$contact.appendChild(contentContact);
        

        this.$footContainer.appendChild(this.$intro);
        this.$footContainer.appendChild(this.$contact);
        // this.$footContainer.appendChild(this.$creator);

        container.appendChild(this.$footContainer);
    }
}