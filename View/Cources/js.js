let list_cources;
let MucDichFilter="all";
let LanguageFilter="all";
let LevelFilter="all";

$(document).ready(function () {

    // tải danh sách khóa học

    fetch('cource-info.json')
        .then(response => response.json())
        .then(data => {
            list_cources = data;

            // rend thông tin khóa học lên bảng
            var cource_container = $(".course-container");

            for (let cource of list_cources) {

                var cource_card = `<div data-level=${cource.Level} data-mucdich=${cource.MucDich} data-language=${cource.Language}
                                    class="grid-item">
                                        <img src=${cource.Image} alt="">
                                        <h5 class="cource-title">${cource.Name}</h5>
                                        <p class="price"><b>${cource.Price}</b></p>
                                    </div>`;

                cource_container = cource_container.html(cource_container.html() + cource_card);
            }

            if(list_cources == undefined || list_cources.length==0){
                $("#not-found").css("display","");
            }
        })
        .catch(error => {

        })


})

function ChangeMucDichFilter(newOption){
    MucDichFilter = option;
}

function ChangeLanguageFilter(newOption){
    LanguageFilter = newOption
}

function ChangeLevelFilter(newOption){
    LevelFilter = newOption
}