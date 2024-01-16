let list_cources;
let MucDichFilter = "all";
let LanguageFilter = "all";
let LevelFilter = "all";
let searchKey ="";
let CurrentPage=1;

$(document).ready(function () {

    // 
    $("#search-input").on("keydown", function (event) {
        if (event.key == "Enter") {
            CurrentPage = 1;
            Search();
        }
        
    })

    // tải danh sách khóa học

    fetch('cource-info.json')
        .then(response => response.json())
        .then(data => {
            list_cources = Array.from(data);
            LoadList(list_cources);
        })
})

function Search(){
    
    debugger;
    searchKey = $("#search-input").val();

    if(searchKey == "" || searchKey == undefined){
        LoadList(list_cources);
    }else{
        searchKey = searchKey.toLowerCase();

        let keys = searchKey.split(" ");
        
        var searchResult = list_cources.filter(function(cource){
            return keys.some(key => key != "" & cource.Name.toLowerCase().includes(key))
        });
        
        LoadList(searchResult);
    }
}

function renderPageNumber(totalPag) {
    TotalPage = totalPag;
    let pagination = document.getElementById("staff_pagination");
    pagination.innerHTML = "";

    for (let index = 1; index <= TotalPage; index++) {
        if (index == CurrentPage) {
            pagination.innerHTML += `<button id="${index}" class="btn mx-1"` +
                `onclick="changeCurrentPage(${index})" style="border:2px solid red">$${index}</button>`;
        } else {
            pagination.innerHTML += `<button id="${index}" class="btn mx-1"` +
                `onclick="changeCurrentPage(${index})">$${index}</button>`;
        }
    }
}

function changeCurrentPage(number) {
    CurrentPage = number; // number = id
    Search();
}

function LoadList(list) {
    // rend thông tin khóa học lên bảng
    var cource_container = $(".course-container");
    cource_container.html("");

    if(MucDichFilter != "all"){
        list = list.filter(function(cource){
            return cource.MucDich == MucDichFilter;
        });
    }

    if(LanguageFilter != "all"){
        list = list.filter(function(cource){
            return cource.Language == LanguageFilter;
        });
    }

    if(LevelFilter != "all"){
        list = list.filter(function(cource){
            return cource.Level == LevelFilter;
        });
    }

    var totalpage = (list.length)/6;
    totalpage = Math.ceil(totalpage);
    if(totalpage<1){
        totalpage=1;
    }
    
    list = Array.from(list).slice((CurrentPage-1)*6, (CurrentPage-1)*6+6);
    debugger;
    for (let cource of list) {

        var cource_card = `<div data-id=${cource.Id} data-level=${cource.Level} data-mucdich=${cource.MucDich} data-language=${cource.Language}
                        class="grid-item">
                            <img src=${cource.Image} alt="">
                            <h5 class="cource-title">${cource.Name}</h5>
                            <p class="price"><b>${cource.Price}</b></p>
                        </div>`;

                        cource_container = cource_container.html(cource_container.html() + cource_card);
    }

    var countDiplay = $(".course-container .grid-item:not(:hidden)").length;
    if (countDiplay == 0) {
        $("#not-found").css("display", "");
    }else{
        $("#not-found").css("display", "none");
    }

    renderPageNumber(totalpage);
}

function ChangeMucDichFilter(newOption) {
    if (newOption != MucDichFilter) {
        MucDichFilter = newOption;
        LoadList(list_cources);
    }
}

function ChangeLanguageFilter(newOption) {
    if (newOption != LanguageFilter) {
        LanguageFilter = newOption
        LoadList(list_cources);
    }
}

function ChangeLevelFilter(newOption) {
    if (newOption != LevelFilter) {
        LevelFilter = newOption
        LoadList(list_cources);
    }
}