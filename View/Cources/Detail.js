var countStage=0;

$(document).ready(function(){
    fetch('cource-info.json')
    .then(response => response.json())
    .then(data => {
        list_cources = Array.from(data);
        LoadPage();

        for(let i = 1; i<= countStage; i++){
            $("#click-toggle-"+i).click(function(){
                $("#display-toggle-"+i).toggle();

                if($("#display-toggle-"+i).css("display")!="none"){
                    $("#click-toggle-"+i+" img").prop("src","Images/bx-down-icon.png");
                }else{
                    $("#click-toggle-"+i+" img").prop("src","Images/bx-right.png");
                }
            })
        }
    })
 })

function LoadPage(){
    var indexId = window.location.href.lastIndexOf("=")+1;
    var id = parseInt(window.location.href.substring(indexId));
    var cource_infor = Array.from(list_cources).find(c => c.Id === id)  

    let cource_heading = document.getElementsByClassName("detail-header")[0];
    cource_heading.textContent += cource_infor.Name;

    $(".detail_site .price span").text(ToVietNamDong(cource_infor.Price))
    var diss_price = cource_infor.Price * ((100-cource_infor.Disscount) / 100);
    $(".detail_site .disccount-price span").text(ToVietNamDong(diss_price)+" (Giảm tới -"+cource_infor.Disscount+"%)")

    $(".detail_site .opening-date span").text(cource_infor.OpeningDate)

    $(".detail_main img").prop("src",cource_infor.Image)

    
    rendFeedBack(cource_infor.FeedBacks)

    $(".title").text(cource_infor.Title)
    $(".description").text(cource_infor.Description)
    $(".during span").text(cource_infor.During + " buổi")
    $(".frequencyPerWeek span").text(cource_infor.FrequencyPerWeek)

    rendStages(cource_infor.Stages);
}

function ChangeSelected(item, nthsection){
    var lis = $(".last-category li").removeClass("selected-li");
    $(item).addClass("selected-li")

    $("#lotrinh").hide();
    $("#giaovien").hide();
    $("#feedback").hide();
    if(nthsection==1){
        $("#lotrinh").show();
    }else if(nthsection ==2){
        $("#giaovien").show();
    }else{
        $("#feedback").show();
    }
}

function rendFeedBack(list_feedback){
    var feedBacksection = document.getElementById("feedback");
    feedBacksection.innerHTML="";
    for(let feedback of list_feedback){
        feedBacksection.innerHTML += `<div>
                                        <p>Tên người dùng: <span>${feedback.UserName}</span></p>
                                        <p>Thời gian : <span>${feedback.Time}</span></p>
                                        <p>Bình luận: <span>${feedback.Content}</span></p>
                                    </div>`;
    } 
}

function rendStages(stages){
    var stages_section = document.getElementsByClassName("stages")[0];
    var index = 1;
    for(let stage of stages){
        var stage_html = `<div>
            <h4 id="click-toggle-${index}" style="cursor:pointer"><i><img src="Images/bx-right.png" alt=""></i> Gia đoạn ${index}: ${stage.Title} (${stage.Duration} buổi)</h4>
            <ul id="display-toggle-${index}" style="display:none;">`

        var lis=``;
        for(let heading of stage.Headings){
            lis += `<li>+ ${heading}</li>`;
        }
        stage_html +=lis;
        stage_html +=`</ul>
        </div>`;
        stages_section.innerHTML += stage_html;

        console.log("#click-toggle-"+index)
        console.log("#display-toggle-"+index)
        
        countStage = index;
        index++;
    }

}
