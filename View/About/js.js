


let layout_header_icon = $("#layout-header-icon");
let dropdown_content_element = $(".dropdown-content");
window.addEventListener("scroll", function(){
    if(this.window.scrollY > 60){
        layout_header_icon.css("animation","smaller 0.3s linear");
        layout_header_icon.css("width","5rem");
        dropdown_content_element.css("top","50px");
    }else{
        layout_header_icon.css("animation","bigger 0.3s linear");
        layout_header_icon.css("width","8rem");
        dropdown_content_element.css("top","80px");
    }
})