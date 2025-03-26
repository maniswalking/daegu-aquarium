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

  
});

let card_slide = [];

$(window).on('load', function () {
  card_slide = [
    {
      marine_name: '흑기흉상어',
      marine_explanation: '회색의 몸에 지느러미 무늬 끝부분이 검정색으로 되어 있어요. 인도•태평양: 홍해, 동아프리카, 하와이에 주로 서식하고 있어요~',
      marine_image: './assets/images/marine-life-01-1x.png',
    },
    {
      marine_name: '흰동가리',
      marine_explanation: '애니메이션(’니모를찾아서’)에 등장해 유명해진 흰동가리! 인도•태평양: 홍해, 동아프리카, 하와이에 주로 서식하고 있어요~',
      marine_image: './assets/images/marine-life-02-1x.png',
    },
    {
      marine_name: '가든일',
      marine_explanation: '겁이많은 정원 장어 가든일! 가든 일이 구멍 밖으로 몸을 내어놓고 있으면 마치 정원에 있는 갈대나 풀잎이 바람에 이리저리 흔들거리는 것처럼 보여서 이름이 "정원"이란 뜻의 "garden"에 "장어"란 뜻의 "eel"이 붙어 "정원장어"가 되었어요. 모랫바닥에 파고들어 꼬리를 모래 구멍에 넣은 상태에서 머리와 몸을 밖으로 길게 빼고 살아간답니다~',
      marine_image: './assets/images/marine-life-03-1x.png',
    },
    {
      marine_name: '매너티',
      marine_explanation: '하루 20kg의 먹이를 먹는 먹보 인어 매너티! 매너티는 주걱모양으로 둥글고 듀공은 고래처럼 두 갈래로 갈라져 있답니다',
      marine_image: './assets/images/marine-life-04-1x.png',
    },
    {
      marine_name: '지브라상어',
      marine_explanation: '어릴 때와 어른일 때의 모습이 다른 제브라 상어! 어릴 때는 몸의 무늬가 마치 얼룩말을 닮아 제브라 상어, 커서는 몸 무늬가 점박이로 바뀌어 레오파드 상어고 불려요',
      marine_image: './assets/images/marine-life-05-1x.png',
    },
    {
      marine_name: '피라냐',
      marine_explanation: '날카로운 이빨이 특징인 피라냐! 육식성으로 무리 지어 순식간에 먹이를 먹어치우는 것으로 유명해요',
      marine_image: './assets/images/marine-life-06-1x.png',
    },
    {
      marine_name: '아로와나',
      marine_explanation: '아마존의 은빛 거구 아로와나! 크기가 1m 이상 자라나는 아로와나는 아마존이 고향이에요. 평소에는 수면 아래에서 느긋하게 헤엄치지만 먹이를 사냥하거나 흥분하면 수면 위로 점프하기도 해요.',
      marine_image: './assets/images/marine-life-07-1x.png',
    },
    {
      marine_name: '훔볼트펭귄',
      marine_explanation: '페루에서 온 신사 훔볼트펭귄! 펭귄은 추운 남극에서만 산다고 생각하기 쉽지만 훔볼트펭귄은 남아메리카 서해안에서 주로 분포해요',
      marine_image: './assets/images/marine-life-08-1x.png',
    },
    {
      marine_name: '캘리포니아 바다사자',
      marine_explanation: '호기심이 많고 큰 눈을 가진 캘리포니아 바다사자! 바다사자의 특별한 수염은 한가닥 속에 10여개의 신경섬유를 가지고 있어서 매우 민감해요.',
      marine_image: './assets/images/marine-life-09-1x.png',
    },
  ];
  target = $('#cardSlide');

  card_slide.forEach((item, index) => {
    let card = $('#cardItem').clone();

    $(card).removeAttr('id');
    $(card).find('.marine-name').text(item.marine_name);
    $(card).find('.marine-explanation').text(item.marine_explanation);
    $(card).find('.slide-bg img').attr('src', item.marine_image);

    $(target).append($(card));
  });

  $('.card-slide > li:first-child').hide();
});

    

    