$(function () {

  // $("#slideVideo1").bind("ended", function() {
  //   document.getElementById("slideVideo2").play();
  // });
  // $("#slideVideo2").bind("ended", function() {
  //   document.getElementById("slideVideo3").play();
  // });
  // $("#slideVideo3").bind("ended", function() {
  //   document.getElementById("slideVideo1").play();
  // });

// 섹션01 - 메인비주얼 슬라이드 swiper
  var swiper = new Swiper(".main-visual", {
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
    autoHeight : true,
    loop: true,
    pagination: {
      el: ".visual-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".visual-next",
      prevEl: ".visual-prev",
    },
  });
  
  // 섹션02 - 슬라이드 swiper
  /*
  var swiper = new Swiper(".sec02-slide", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".sec02-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".sec02-next",
      prevEl: ".sec02-prev",
    },
  });
  */

  var swiper = new Swiper(".sec02-slide", {
    slidesPerView: 1.5,
    breakpoints: {
      1399: {
        slidesPerView: 3.8,
      },
      1024: {
        slidesPerView: 3.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      450: {
        slidesPerView: 1.8,
      },
      360: {
        slidesPerView: 1.3,
      },
    }, 
    spaceBetween: 20,
    pagination: {
      el: ".sec02-pagination",
      type: "progressbar",
    },
  });


  // 섹션04 - 슬라이드 swiper
  var slideTotal = $('.portfolio_thumb .swiper-slide').length;
	var swiper2 = new Swiper('.portfolio_thumb', {
		slidesPerView: "auto",
		spaceBetween : 35,
		speed: 800,
		loop: false,
		freeMode: true,
		allowTouchMove:true,
		slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		on: {
			slideChange : function() {
				$('.portfolio_thumb .swiper-slide').removeClass('swiper-slide-active');
			},
			
		},
	});	
  // 섹션04 - 슬라이드 썸네일 swiper
  var swiper = new Swiper('.portfolio_gall', {
    slidesPerView: 1,
    effect:"fade",
    fadeEffect: { crossFade: true },
    freeMode: true,
    allowTouchMove:true,
    slideToClickedSlide: true,
    loop: false,
    speed: 400,
    thumbs: {
        swiper: swiper2,
    },
    navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
    },
    pagination: {
        el: '.portfolioPage',
        clickable: true,
    },
    on: {
        slideChange: function () {
            // 메인 슬라이드가 변경될 때 썸네일 갤러리 즉시 이동
            swiper2.slideTo(this.activeIndex);
        },
    },
  });

///////////////////////////////////////////
});