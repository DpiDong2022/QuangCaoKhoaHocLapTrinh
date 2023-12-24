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