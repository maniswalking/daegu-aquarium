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
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
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
    slidesPerView: 4,
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



// JavaScript - 메인비주얼 슬라이드 콘텐츠 자동 채우기


let card_slide = [];

$(window).on('load', function () {
  card_slide = [
    {
      marine_name: '흑기흉상어',
      marine_txt01: '학명 : Carcharhinus melanopterus',
      marine_txt02: '분류 : 척삭동물 > 연골어강 > 흉상어목 > 흉상어과',
      marine_txt03: '빠밤~ 빠밤~ 빠밤 빠밤 빠밤~~~!!! 상어다~~',
      marine_txt04: '지느러미 무늬 끝부분이 검정색으로 되어 있어요.',
      marine_image: './assets/images/marine-life-01-1x.png',
    },
    {
      marine_name: '흰동가리',
      marine_txt01: '학명 : Amphiprion ocellaris',
      marine_txt02: '분류 : 척삭동물 > 경골어류 > 농어목 > 자리돔과',
      marine_txt03: '애니메이션에 등장해 유명해진 흰동가리!',
      marine_txt04: '말미잘과 공생하는 물고기랍니다.',
      marine_image: './assets/images/marine-life-02-1x.png',
    },
    {
      marine_name: '가든일',
      marine_txt01: '학명 : Heteroconger hassi',
      marine_txt02: '분류 : 척색동물문 > 조기아강 > 뱀장어목 > 붕장어과',
      marine_txt03: '겁이많아 숨기 좋아하는 가든일!',
      marine_txt04: '먹이를 먹을 때 조차 구멍을 절대 벗어나질 않아요.',
      marine_image: './assets/images/marine-life-03-1x.png',
    },
    {
      marine_name: '매너티',
      marine_txt01: '학명 : Trichechus senegalensis',
      marine_txt02: '분류 : 척삭동물 > 포유류 > 바다소목 > 매너티과',
      marine_txt03: '하루 20kg의 먹이를 먹는 먹보 인어 매너티!',
      marine_txt04: '매너티는 야채를 좋아한답니다.',
      marine_image: './assets/images/marine-life-04-1x.png',
    },
    {
      marine_name: '지브라상어',
      marine_txt01: '학명 : Stegostoma fasciatum',
      marine_txt02: '분류 : 척삭동물 > 연골어류 > 수염상어목 > 제브라상어과',
      marine_txt03: '어릴 때와 어른일 때의 모습이 달라요.',
      marine_txt04: '보기와 달리 온순한 성격을 가지고 있답니다.',
      marine_image: './assets/images/marine-life-05-1x.png',
    },
    {
      marine_name: '피라냐',
      marine_txt01: '학명 : Pygocentrus nattereri',
      marine_txt02: '분류 : 척삭동물 > 경골어류 > 잉어목 > 카라신과',
      marine_txt03: '날카로운 이빨이 특징인 피라냐!',
      marine_txt04: '아마존 원주민들 말로 ‘이빨이 있는 물고기’라는 뜻이래요.',
      marine_image: './assets/images/marine-life-06-1x.png',
    },
    {
      marine_name: '아로와나',
      marine_txt01: '학명 : Osteoglossum bicirrhosum',
      marine_txt02: '분류 : 척삭동물 > 조기어류 > 골설어목 > 골설어류과',
      marine_txt03: '아마존의 은빛 거구 아로와나!',
      marine_txt04: '아로와나는 크기가 1m 이상 자란답니다.',
      marine_image: './assets/images/marine-life-07-1x.png',
    },
    {
      marine_name: '훔볼트펭귄',
      marine_txt01: '학명 : Spheniscus humboldti',
      marine_txt02: '분류 : 척삭동물 > 조류 > 펭귄목 > 펭귄과',
      marine_txt03: '페루에서 온 신사 훔볼트펭귄!',
      marine_txt04: '남극이 아니라 남아메리카 서해안에서 주로 분포해요',
      marine_image: './assets/images/marine-life-08-1x.png',
    },
    {
      marine_name: '캘리포니아 바다사자',
      marine_txt01: '학명 : Zalophus californianus',
      marine_txt02: '분류 : 척삭동물 > 포유류 > 기각목 > 바다사자과',
      marine_txt03: '호기심이 많고 큰 눈을 가진 캘리포니아 바다사자!',
      marine_txt04: '수염을 이용하여 수중에서 먹잇감의 위치를 정확히 파악해요.',
      marine_image: './assets/images/marine-life-09-1x.png',
    },
  ];
  target = $('#cardSlide');

  card_slide.forEach((item, index) => {
    let card = $('#cardItem').clone();

    $(card).removeAttr('id');
    $(card).find('.marine-name').text(item.marine_name);
    $(card).find('.marine-txt01').text(item.marine_txt01);
    $(card).find('.marine-txt02').text(item.marine_txt02);
    $(card).find('.marine-txt03').text(item.marine_txt03);
    $(card).find('.marine-txt04').text(item.marine_txt04);
    $(card).find('.slide-bg img').attr('src', item.marine_image);

    $(target).append($(card));
  });

  $('.card-slide > div:first-child').hide();
});

    

    