
const mySwiper_thumb = new Swiper('.sub-box', {

  loop: true,
  	
  allowTouchMove: false,
 

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
 
const mySwiper_main = new Swiper('.main-box', {
    loop: true,
    allowTouchMove: false,

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
  thumbs: {
    swiper: mySwiper_thumb,
  },
});