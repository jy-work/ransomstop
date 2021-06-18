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

    $('.list_overview li:first-child .link_popup').click(function () {
        $('.dim').addClass('on');
        $('.popup.about').addClass('on');
        $('body').css('overflow', 'hidden');
    })

    $('.list_overview li:nth-child(2) .link_popup').click(function () {
        $('.dim').addClass('on');
        $('.popup.culture').addClass('on');
        $('body').css('overflow', 'hidden');
    })

    $('.list_overview li:nth-child(3) .link_popup').click(function () {
        $('.dim').addClass('on');
        $('.popup.organization').addClass('on');
        $('body').css('overflow', 'hidden');
    })

    $('.dim .btn_close').click(function () {
        $('.dim').removeClass('on');
        $('body').css('overflow', 'visible');
    })

    // 메인 배너 롤링
    $("#section_banner button:first-child").click(function(){
        $('#section_banner .list_banner').animate({"left": "0"});
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    })

    $("#section_banner button:nth-child(2)").click(function(){
        $('#section_banner .list_banner').animate({"left": "-1100px"});
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    })

    $("#section_banner button:nth-child(3)").click(function(){
        $('#section_banner .list_banner').animate({"left": "-2200px"});
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    })

    // 솔루션 롤링

    var $panel = $("#section_solution .wrap_banner").find(".list_banner");
    var itemWidth = 1200; // 아이템 가로 길이

    // Auto 롤링 아이디
    var rollingSolution;
    var rollingMainBanner;
    var mainRolling = 1;
    auto();

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
        // 2초마다 start 호출
        rollingSolution = setInterval(function () {
            startRoop();
        }, 3000);

        rollingMainBanner = setInterval(function () {
            startRolling();
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
        if(mainRolling == 1) {
            $('#section_banner .list_banner').animate({"left": "0"});
            $("#section_banner button:first-child").addClass('on');
            $("#section_banner button:first-child").siblings().removeClass('on');
            mainRolling ++;
        } else if (mainRolling == 2) {
            $('#section_banner .list_banner').animate({"left": "-1100px"})
            $("#section_banner button:nth-child(2)").addClass('on');
            $("#section_banner button:nth-child(2)").siblings().removeClass('on');
            mainRolling ++;
        } else {
            $('#section_banner .list_banner').animate({"left": "-2200px"});
            $("#section_banner button:nth-child(3)").addClass('on');
            $("#section_banner button:nth-child(3)").siblings().removeClass('on');
            mainRolling = 1;
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