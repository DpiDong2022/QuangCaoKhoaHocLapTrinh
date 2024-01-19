let list_cources={};
let MucDichFilter = "all";
let LanguageFilter = "all";
let LevelFilter = "all";
let searchKey = "";
let CurrentPage = 1;
let PageSize = 6;
let curretSize = 1200;


 // tải danh sách khóa học

 $(document).ready(function(){
    fetch('cource-info.json')
    .then(response => response.json())
    .then(data => {
        list_cources = Array.from(data);
        LoadList(list_cources);
    })
 })

function handleResize() {
    var size = window.innerWidth;
    if (curretSize > 1100 & size <= 1100) {
        PageSize = 4;
        Search();
        curretSize = size;
    } else if (curretSize <= 1100 & size > 1100) {
        PageSize = 6;
        if (CurrentPage > 1) {
            CurrentPage = CurrentPage - 1
        }
        Search();
        curretSize = size;
    } else if (size <= 820) {
        $("#staff_pagination").removeClass("list-group-horizontal")
        return;
    }
    $("#staff_pagination").addClass("list-group-horizontal")
}

$(document).ready(function () {


    window.addEventListener("resize", handleResize);
    // 
    $("#search-input").on("keydown", function (event) {
        if (event.key == "Enter") {
            debugger
            $("input[type='radio'][name='MucDichHoc']:first").prop("checked", true);
            $("input[type='radio'][name='Language']:first").prop("checked", true);
            $("input[type='radio'][name='Level']:first").prop("checked", true);
            MucDichFilter = "all";
            LanguageFilter = "all";
            LevelFilter = "all";
            CurrentPage = 1;
            Search();
        }
        $("#search-icon").click(function () {
            debugger
            $("input[type='radio'][name='MucDichHoc']:first").prop("checked", true);
            $("input[type='radio'][name='Language']:first").prop("checked", true);
            $("input[type='radio'][name='Level']:first").prop("checked", true);
            MucDichFilter = "all";
            LanguageFilter = "all";
            LevelFilter = "all";
            CurrentPage = 1;
            Search();
        });

    })

   
})

function Search() {

    searchKey = $("#search-input").val();

    if (searchKey == "" || searchKey == undefined) {
        LoadList(list_cources);
    } else {
        searchKey = searchKey.toLowerCase();

        let keys = searchKey.split(" ");

        var searchResult = list_cources.filter(function (cource) {
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
                `onclick="changeCurrentPage(${index})" style="border:2px solid red">${index}</button>`;
        } else {
            pagination.innerHTML += `<button id="${index}" class="btn mx-1"` +
                `onclick="changeCurrentPage(${index})">${index}</button>`;
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

    if (MucDichFilter != "all") {
        list = list.filter(function (cource) {
            return cource.MucDich == MucDichFilter;
        });
    }

    if (LanguageFilter != "all") {
        list = list.filter(function (cource) {
            return cource.Language == LanguageFilter;
        });
    }

    if (LevelFilter != "all") {
        list = list.filter(function (cource) {
            return cource.Level == LevelFilter;
        });
    }

    var totalpage = (list.length) / PageSize;
    totalpage = Math.ceil(totalpage);
    if (totalpage < 1) {
        totalpage = 1;
    }

    list = Array.from(list).slice((CurrentPage - 1) * PageSize, (CurrentPage - 1) * PageSize + PageSize);
    for (let cource of list) {

        var cource_card = `<div data-id=${cource.Id} data-level=${cource.Level} data-mucdich=${cource.MucDich} data-language=${cource.Language}
                                class="grid-item">
                                <a href="detail.html?id=${cource.Id}">
                                    <img src=${cource.Image} alt="">
                                    <h5 class="cource-title">${cource.Name}</h5>
                                    <div class="item-footer list-group-horizontal">
                                        <i class='fa fa-group'>  <b>${cource.Studied}</b></i>
                                        <p class="price"><b>${ToVietNamDong(cource.Price)}</b></p>
                                    </div>
                                </a>
                            </div>`;

        cource_container = cource_container.html(cource_container.html() + cource_card);
    }

    var countDisplay = CountItems();
    if (countDisplay == 0) {
        $("#not-found").show();
    } else {
        $("#not-found").hide();
    }

    renderPageNumber(totalpage);
}

function ChangeMucDichFilter(newOption) {
    if (newOption != MucDichFilter) {
        CurrentPage = 1;
        MucDichFilter = newOption;
        Search(list_cources);
    }
}

function ChangeLanguageFilter(newOption) {
    if (newOption != LanguageFilter) {
        LanguageFilter = newOption
        CurrentPage = 1;
        Search(list_cources);

    }
}

function ChangeLevelFilter(newOption) {
    if (newOption != LevelFilter) {
        CurrentPage = 1;
        LevelFilter = newOption
        Search(list_cources);
    }
}

function CountItems() {
    return $(".course-container .grid-item:not(:hidden)").length;
}

function ToVietNamDong(money) {
    let formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    let formattedNumber = formatter.format(money);
    return formattedNumber;
}