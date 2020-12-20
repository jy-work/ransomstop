$(document).ready(function(){
    var body = $("body");
    var gnb = $(".header .gnb");
    var nav_item = $(".header .gnb .list_gnb .item_gnb .link_gnb");
    var btn_gnb = $(".header .btn_gnb");
    var btn_gnb_close = $(".header .btn_close");

    // PC 메뉴 열기
    $(nav_item).click(function(){
        $(this).toggleClass("on");
        nav_item.not(this).removeClass("on");
    });

    // Tablet, Mobile gnb 열기
    $(btn_gnb).click(function(){
        $(body).addClass("lock");
        $(gnb).addClass("on");
    });

    // Tablet, Mobile gnb 닫기
    $(btn_gnb_close).click(function(){
        $(body).removeClass("lock");
        $(gnb).removeClass("on");
    });

    $( window ).resize(function() {
        var windowWidth = $( window ).width();
        if(windowWidth < 768) {
            $(nav_item).removeClass("on");
        }
     });
     
})
 