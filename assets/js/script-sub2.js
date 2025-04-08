$(function(){
   
    $('.sortdown').click(function(){
        $('.list_bar').toggle();
        
        
    });
  //  스와이퍼
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
            360: { // 화면 크기 360px 이상
              slidesPerView: 1,
              
            },
            1024: {  // 화면 크기 1024px 이상
              slidesPerView: 1.7,
              
            },

            
          }
    });



    // 스와이퍼 끝


////////////    
});
