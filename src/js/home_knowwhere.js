$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = $('header').outerHeight();
    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (didScroll) {
            if (st > lastScrollTop && st > navbarHeight) {
                $('header').addClass('scrolled');
            } else {
                $('header').removeClass('scrolled');
            }
        }
    }
    
    $('.list_gnb li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    })

    $('.list_overview li:nth-child(1) .link_popup').click(function () {
        $('.dim').addClass('on');
        $('.popup.about').addClass('on');
        $('.popup.about').siblings().removeClass('on');
        $('body').css('overflow', 'hidden');
    })

    $('.list_overview li:nth-child(2) .link_popup').click(function () {
        $('.dim').addClass('on');
        $('.popup.culture').addClass('on');
        $('.popup.culture').siblings().removeClass('on');
        $('body').css('overflow', 'hidden');
    })

    $('.list_overview li:nth-child(3) .link_popup').click(function () {
        $('.dim').addClass('on');
        $('.popup.organization').addClass('on');
        $('.popup.organization').siblings().removeClass('on');
        $('body').css('overflow', 'hidden');
    })

    $('.list_overview li:nth-child(4) .link_popup').click(function () {
        $('.dim').addClass('on');
        $('.popup.history').addClass('on');
        $('.popup.history').siblings().removeClass('on');
        $('body').css('overflow', 'hidden');
    })

    $('.popup.history .list_year button').click(function() {
        $(this).parent('li').addClass('on');
        $(this).parent('li').siblings().removeClass('on');
    })

    $('.popup.history .list_year li:first-child button').click(function() {
        $('.list_history').removeClass('on');
        $('.list_history.y2021').addClass('on');
    })

    $('.popup.history .list_year li:nth-child(2) button').click(function() {
        $('.list_history').removeClass('on');
        $('.list_history.y2020').addClass('on');
    })

    $('.popup.history .list_year li:nth-child(3) button').click(function() {
        $('.list_history').removeClass('on');
        $('.list_history.y2019').addClass('on');
    })

    $('.popup.history .list_year li:nth-child(4) button').click(function() {
        $('.list_history').removeClass('on');
        $('.list_history.y2018').addClass('on');
    })

    $('.popup.history .list_year li:nth-child(5) button').click(function() {
        $('.list_history').removeClass('on');
        $('.list_history.y2017').addClass('on');
    })

    $('.dim .btn_close').click(function () {
        $('.dim').removeClass('on');
        $('.popup').removeClass('on');
        $('body').css('overflow', 'visible');
    })

    // 솔루션 롤링

    var $panel = $("#section_solution .wrap_banner").find(".list_banner");
    var $panelWrapMain = $("#section_banner .wrap_btn");
    var $panelMain = $("#section_banner .wrap_banner").find(".list_banner");
    var itemWidth = 1200; // 아이템 가로 길이
    var itemWidthMain = 1100; // 아이템 가로 길이

    // Auto 롤링 아이디
    var rollingSolution;
    var rollingMainBanner;
    auto();
    var mainRolling = 2;


    // 이전 이벤트
    $("#section_solution .btn_pre").on("click", prev);
    $("#section_solution .btn_pre").mouseover(function (e) {
        clearInterval(rollingSolution);
    });
    $("#section_solution .btn_pre").mouseout(auto);

    // 다음 이벤트
    $("#section_solution .btn_next").on("click", next);
    $("#section_solution .btn_next").mouseover(function (e) {
        clearInterval(rollingSolution);
    });
    $("#section_solution .btn_next").mouseout(auto);

    function auto() {
        // 3초마다 start 호출
        rollingSolution = setInterval(function () {
            startRoop();
        }, 3000);

        rollingMainBanner = setInterval(function () {
            startRolling();
            setIndicator();
        }, 3000);
    }

    function startRoop() {
        $panel.css("width", 3600 + "px");
        $panel.animate({
            "left": -itemWidth + "px"
        }, function () {

            // 첫번째 아이템을 마지막에 추가하기
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

            // 첫번째 아이템을 삭제하기
            $(this).find("li:first").remove();

            // 좌측 패널 수치 초기화
            $(this).css("left", 0);
        });
    }

    function startRolling() {
        $panelMain.css("width", 3300 + "px");
        $panelMain.animate({
            "left": -itemWidthMain + "px"
        }, function () {

            // 첫번째 아이템을 마지막에 추가하기
            $(this).append("<li class='item_banner'>" + $(this).find("li:first").html() + "</li>");

            // 첫번째 아이템을 삭제하기
            $(this).find("li:first").remove();

            // 좌측 패널 수치 초기화
            $(this).css("left", 0);
        });
    }

    function setIndicator() {
        if(mainRolling == 2) {
            $($panelWrapMain).find("button:nth-child(2)").addClass('on');
            $($panelWrapMain).find("button:nth-child(2)").siblings().removeClass('on');
            mainRolling = 3;
        }
        else if(mainRolling == 3) {
            $($panelWrapMain).find("button:nth-child(3)").addClass('on');
            $($panelWrapMain).find("button:nth-child(3)").siblings().removeClass('on');
            mainRolling = 1;
        }
        else {
            $($panelWrapMain).find("button:first").addClass('on');
            $($panelWrapMain).find("button:first").siblings().removeClass('on');
            mainRolling = 2;
            
        }
    }

    // 이전 이벤트 실행
    function prev(e) {
        $panel.css("left", -1200 + "px");
        $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
        $panel.animate({
            "left": "0px"
        }, function () {
            $(this).find("li:last").remove();
        });
    }

    // 다음 이벤트 실행
    function next(e) {
        $panel.animate({
            "left": -itemWidth + "px"
        }, function () {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});