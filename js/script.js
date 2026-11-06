$(function () {
    //팝업
    $(".pp").click(function () {
        $(".popup").show();
        return false; //링크차단
    })

    $(".button").click(function () {
        $(".popup").hide();
        return false;
    })

    //메뉴
    $("nav>ul>li").mouseenter(function () {
        $(".sub").stop().slideDown();
    })

    $("nav>ul>li").mouseleave(function () {
        $(".sub").stop().slideUp();
    })

    //키보드이벤트 메뉴(시간 여유 있을 때만)
    $("nav>ul>li").focusin(function () {
        $(".sub").slideDown();
        $(this).addClass("on");
    })

    $(".sub li:last-child").focusout(function () {
        $("nav>ul>li").removeClass("on");
    })

    $("nav li:last-child li:last-child").focusout(function () {
        $(".sub").slideUp();
    })


    //탭메뉴(공지사항 갤러리)
    $(".tabmenu>li").click(function () {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on");

        var i = $(this).index()

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()

        return false;
    })

    //슬라이드
    function slide() {
        $(".slide ul").animate({ top: "-300px" }, 1000, function () {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({ top: 0 })
        })
    }

    setInterval(slide, 2000)

})

