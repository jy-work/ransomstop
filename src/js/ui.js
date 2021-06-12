$(document).ready(function(){
    var body = $("body");
    var gnb = $(".header .gnb");
    var nav_item = $(".header .gnb .list_gnb .item_gnb a.link_gnb");
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

    var windowWidth = $( window ).width();
    $( window ).resize(function() {
        if(windowWidth < 768) {
            $(nav_item).removeClass("on");
        }
     });

    // 홈 배너 롤링

    var rollingId;
    var bannerList = $(".info_area").find(".list_slide");
    var bannerListItem = bannerList.children();
    var bannerLength = bannerListItem.length;
    var bannerItemWidth = $(".info_area").outerWidth();

    bannerListItem.css("width", bannerItemWidth + "px");
    bannerList.css("width", bannerItemWidth * bannerLength + "px");
    rollingId = setInterval(function() { rollingStart(); }, 4000);


    function rollingStart() {
        var bannerList = $(".info_area").find(".list_slide");
        var bannerListItem = bannerList.children();
        var bannerLength = bannerListItem.length;
        var bannerItemWidth = $(".info_area").outerWidth();
        bannerListItem.css("width", bannerItemWidth + "px");
        bannerList.css("width", bannerItemWidth * bannerLength + "px");

        bannerList.animate({left: - bannerItemWidth}, 1000, function() {
            $(this).append("<li class='item_slide'>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li.item_slide:first").remove();
            $(this).find("li.item_slide").css("width", bannerItemWidth + "px");
            $(this).css("left", 0);
        });
    }    

    $( window ).resize( function() {
        rollingId; 
    });

    // 인재채용
    var dim = $(".dim");
    var link_recruit = $(".link_banner.recruit .sub_link");
    var popup_recruit = $(".layer_recruit");
    var recruit_close = $(".layer_recruit .btn_close");

    $(link_recruit).click(function(){
        dim.show();
        popup_recruit.show();
        $("body").attr("overflow", "hidden");
    })

    $(recruit_close).click(function(){
        dim.hide();
        popup_recruit.hide();
        $("body").attr("overflow", "");
    })


    // 제품 주요화면 롤링
    var rollingView;
    var viewList = $(".view_area").find(".list_view_img");
    var viewListItem = viewList.children();
    var viewLength = viewListItem.length;
    var viewItemWidth = $(viewListItem).outerWidth();

    viewList.css("width", (viewItemWidth * viewLength) + (90 * (viewLength-1)) + "px").css("left", 0);
    rollingView = setInterval(function() { rollingViewStart(); }, 3000);
    // rollingView2 = setInterval(function() { rollingViewMobile(); }, 3000);


    // if(windowWidth < 560) {
    //     rollingView2 = setInterval(function() { rollingViewMobile(); }, 3000);
    // }
    // else {
    //     rollingView = setInterval(function() { rollingViewStart(); }, 3000);
    // }
    

    function rollingViewStart() {
        viewList.animate({left: - viewItemWidth - 90}, 2000, function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).find("li").css("width", viewItemWidth + "px");
            $(this).css("left", 0);
        });
    }

    // $( window ).resize( function() {
    //     if(windowWidth < 560) {
    //         rollingView2 = setInterval(function() { rollingViewMobile(); }, 3000);
    //     }
    //     else {
    //         rollingView = setInterval(function() { rollingViewStart(); }, 3000);
    //     }
    // });

    // function rollingViewMobile() {
    //     var viewList = $(".view_area").find(".list_view_img");
    //     var viewListItem = viewList.children();
    //     var viewLength = viewListItem.length;
    //     var viewItemWidth = $(".view_area").outerWidth();
    //     viewList.css("width", viewItemWidth + "px");

    //     viewListItem.css("width", viewItemWidth + "px");
    //     viewList.css("width", viewItemWidth * viewLength + "px");

    //     viewList.animate({left: - viewItemWidth}, 1000, function() {
    //         $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
    //         $(this).find("li:first").remove();
    //         $(this).find("li").css("width", viewItemWidth + "px");
    //     });
    // }    
    
})
 