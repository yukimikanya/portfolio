const mySwiper_main = new Swiper('.main-box', {
    loop: true,
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween:5,

    breakpoints: {
      481: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});