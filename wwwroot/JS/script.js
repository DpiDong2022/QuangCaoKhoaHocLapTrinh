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

    // mobile-menu clicked event
    $("#menu-mobile").click(() => {
        if ($(".dong-header-right").css("display") == "none") {
            document.getElementsByClassName("dong-header-right")[0].style.display = "inline-block";
        } else {
            document.getElementsByClassName("dong-header-right")[0].style.display = "none";
        }
    });

    // make active a(header navigation button) when its come to that page
    var current_href = window.location.href;

    if(current_href.includes("Cources")){
        $("#Cources-page").addClass("active");
    }else if(current_href.includes("About") || current_href.includes("Teacher")|| current_href.includes("QnA")){
        $("#About-page").addClass("active");
    }else if(current_href.includes("Calendar")){
        $("#Calendar-page").addClass("active");
    }else{
        $("#Home-page").addClass("active");
    }
    // end 
});
// ends

let layout_header_icon = $(".logo0");
let dropdown_content_element = $(".dropdown-content");
window.addEventListener("scroll", function () {
    if (this.window.scrollY > 3) {
        layout_header_icon.css("animation", "smaller 0.3s linear");
        layout_header_icon.css("width", "5rem");
        dropdown_content_element.css("top", "50px");
    } else if (this.window.screenY == 0) {
        layout_header_icon.css("animation", "bigger 0.3s linear");
        layout_header_icon.css("width", "8rem");
        dropdown_content_element.css("top", "80px");
    }
})



// show the hidden header when the size is more than 791
window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) {
        document.getElementsByClassName("dong-header-right")[0].style.display = "";
    }
});
//end

function open_detail_page(id) {
    href = window.location.href;
    href = href.replace("/index.html", "");
    href = href.replace("#", "");
    window.open(href + `/Cources/detail.html?id=${id}`, "_blank")
}

function open_detail_page_mucdichhoc(mucdich) {
    href = window.location.href;
    href = href.replace("/index.html", "");
    href = href.replace("#", "");
    window.open(href + `/Cources/index.html?mucdich=${mucdich}`, "_blank")
}