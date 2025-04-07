$(function(){
  // 헤더 마우스 움직임 감지
  /* 
  let lastScroll = 0; // 초기 스크롤 위치
  $(window).scroll(function(){
    let nowScroll = $(this).scrollTop(); // 현재 스크롤 위치
    if (nowScroll > lastScroll) { // 스크롤 위치 증가
      $('.header').stop().slideUp(50);
    } else { // 스크롤 위치 감소
      $('.header').stop().slideDown(200);
    }
    lastScroll = nowScroll; // 현재 스크롤 위치 할당
  });
  */

  var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
/* 
// 메뉴 드롭 다운

var gnb = $('#gnb');

// 마우스 over 시
gnb.mouseenter(function() {
  $('.menu-sub-wrap').show();
  // menu bg
  var menuHeight = $('#header').outerHeight();
  var menusubHegiht = $('.menu-sub-wrap').outerHeight();
  $('.hd_bg').css({
    'top': menuHeight + 'px',
    height: menusubHegiht + 'px'
  });
});

// 마우스  leave 시
gnb.mouseleave(function() {
  $('.menu-sub-wrap').hide();
  $('.hd_bg').css('height', '0')

});

//dept2 hover시 dept1 active
$('.menu-depth-1').mouseenter(function() {
  $(this).children().addClass('active');
  $(this).siblings().children().removeClass('active')
});
$('.menu-depth-1').mouseleave(function() {
  $(this).children().removeClass('active');
});

// 햄버거 메뉴
$('.menu_bar').click(function(){
  $(this).toggleClass('active');
  $('.menu_open').slideToggle();
});
*/

///////////////////////
});

$(window).on("load resize", function () {
  if (windowWidth > 1023 && !isTouchDevice) {
      clearTimeout(pcEvent);
      pcEvent = setTimeout(function () {
          // snb offset set
          function snbPosition(get, width) {
              var g = get[0].getBoundingClientRect();
              let _right = Math.floor(g.right - width);

              return {
                  x: _right,
              };
          }
          $depth01.find(".text_list").each(function (idx, target) {
              let _padding = 24;
              let _width = 0;

              const $ul = $(target).find(">ul");
              const $li = $ul.find("li");
              if (idx === 0){
                  _width = ($li.eq(0).outerWidth() + $li.eq(1).outerWidth()) / 2  + (_padding * 2);
              }else if(idx === 1){
                  _width = $ul.outerWidth() - _padding;
              }else if(idx === 2){
                  _width = $ul.outerWidth();
              }

              gsap.set($(target), {
                  ...snbPosition($(target).closest("li").find("a").find("span"), _width),
              });
          });

          // off
          if ($header.hasClass("active")) {
              Common.utils.isMoveStop(false);
          }
          $hamBtn.off("click");
          $depth01.find("> a").off("click");
          $header.removeClass("active");
          $dim.removeClass("active");
          $gnbWrap.removeClass("active");
          $depth01.removeClass("active");
          $hamBtn.removeClass("active");
          gsap.set($snb, { clearProps: "all" });

          // on
          $headerWrap.on("mouseenter", function () {
              $header.addClass("active");
          });
          $headerWrap.on("mouseleave", function () {
              $header.removeClass("active");
              $depth01.removeClass("active");
              $dim.removeClass("active");
          });
          $depth01.on("mouseenter", function () {
              if (!$(this).hasClass("only")) {
                  // 2depth 없는경우
                  $dim.addClass("active");
              }
              $depth01.removeClass("active");
              $(this).addClass("active");
              $header.addClass("active");
          });
          // $depth01.on("mouseleave", function () {
          //     $dim.removeClass("active");
          //     $(this).removeClass("active");
          // });
          $depth02.on("mouseenter", function () {
              $(this).find("ul").addClass("active").stop().slideDown(300);
          });
          $depth02.on("mouseleave", function () {
              $(this).find("ul").removeClass("active").stop().slideUp(300);
          });
      }, 100);
  } else {
      clearTimeout(mEvent);
      mEvent = setTimeout(function () {
          // snb offset set
          $depth01.each(function (idx, target) {
              if($(target).find(".text_list").length > 0){
                  gsap.set($(target).find(".text_list"), { clearProps: "all" });
              }
              if($(target).hasClass("current")){
                  $(target).find(".snb_wrap").show();
              }
          });
          // off
          $headerWrap.off("mouseenter mouseleave");
          $depth01.off("mouseenter mouseleave");
          $depth02.off("mouseenter mouseleave");
          $hamBtn.off("click");
          $depth01.find("> a").off("click");

          // on
          $hamBtn.on("click", function () {
              if ($(this).hasClass("active")) {
                  Common.utils.isMoveStop(false);

                  $(this).removeClass("active");

                  $header.removeClass("active");
                  $gnbWrap.removeClass("active");
                  $dim.removeClass("active");
              } else {
                  Common.utils.isMoveStop(true);

                  $(this).addClass("active");

                  $dim.addClass("active");
                  $header.addClass("active");
                  $gnbWrap.addClass("active");
              }
          });
          $depth01.find("> a").on("click", function (e) {
              if (!$(this).parent().hasClass("only")) {
                  e.preventDefault();

                  if ($(this).parent().hasClass("active") || $(this).parent().hasClass("current")) {
                      $(this).parent().removeClass("current active");
                      $(this).next().slideUp(300);
                  } else {
                      $gnbWrap.find("> ul > li").removeClass("current active");
                      $snb.slideUp(300);
                      $(this).parent().addClass("active");
                      $(this).next().slideDown(300);
                  }
              }
          });
      }, 100);
  }
});