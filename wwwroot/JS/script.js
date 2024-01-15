// hiển thị nút load trang lúc mới vào trang hôm (from Dong)
$(document).ready(function () {
    $(".loading").removeClass("loader--hidden");
    $(".loading").addClass("loader");

    setTimeout(() => {
        $(".loading").addClass("loader--hidden");
    }, 500);

    //
    $(".loader").on("transitionend", function () {
        $(".loading").removeClass("loader");
    });

});
// ends

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