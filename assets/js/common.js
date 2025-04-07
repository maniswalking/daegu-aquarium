$(function(){

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = 0;
    var $header = $('#header');

    $(window).on("load resize", function () {
    navbarHeight = $header.outerHeight(); // 항상 최신 높이 반영
    });

    $(window).scroll(function () {
    didScroll = true;
    });

    setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
    }, 250);

    function hasScrolled() {
    var st = $(window).scrollTop();
    var windowWidth = $(window).width();

    // 1024px 이하에서는 항상 헤더 보이기
    if (windowWidth <= 1024) {
        $header.removeClass('nav-up').addClass('nav-down');
        return;
    }

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $header.removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
        $header.removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
    }

    // 메뉴 드롭다운
    let $headerWrap = $header.find(".header_wrap"),
    $gnbWrap = $header.find(".gnb_wrap"),
    $depth01 = $header.find(".depth01"),
    $depth02 = $header.find(".depth02"),
    $snb = $(".snb_wrap"),
    $depth2Bg = $(".depth2_bg")
    $hamBtn = $(".ham_btn button");




    $headerWrap.on("mouseenter", function () {
    $header.addClass("active");
    }).on("mouseleave", function () {
    $header.removeClass("active");
    $depth01.removeClass("active");
    });

    $depth01.on("mouseenter", function () {
    $depth01.removeClass("active");
    $(this).addClass("active");
    $depth2Bg.addClass("active");
    });
    $headerWrap.on("mouseleave", function () {
    $depth2Bg.removeClass("active");
    });




    // 모바일 메뉴

    $(".header .mo_list .mo_depth01 .depth_btn").on("click", function() {
        if(!$(this).parents(".mo_depth01").hasClass("on")){
            $(".mo_depth01").not($(this).parents(".mo_depth01")).removeClass("on").find(".depth_btn").attr("title", "메뉴 열기");
            $(".mo_depth01").not($(this).parents(".mo_depth01")).find(".mo_text_list").stop(true, true).slideUp(300);
            
            $(this).attr("title", "메뉴 닫기");
            $(this).parents(".mo_depth01").addClass("on");
            $(this).parents(".mo_depth01").find(".mo_text_list").stop(true, true).slideDown(300);
        } else{
            $(this).attr("title", "메뉴 열기");
            $(this).parents(".mo_depth01").removeClass("on");
            $(".mo_depth01").find(".mo_text_list").stop(true, true).slideUp(300);
            }
    });

    // 햄버거 액션
    /*var burger = $('.ham-menu');
    var menuMobile = $('.mo_gnb_inner')

    burger.each(function(index){
    var $this = $(this);
    
    $this.on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings('.mo_gnb_inner').fadeIn(300);
    })*/
    $('.ham-menu').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.mo_gnb_inner').removeClass('on');
        } else {
            $(this).addClass('active');
            $(this).siblings('.mo_gnb_inner').addClass('on');
        }
        });
});


