let els_01 = document.querySelectorAll('.js-fadeIn');

let els_02 = document.querySelectorAll('.sub-content');

els_01.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 1300){
       fadeIn.classList.add('is-scrollIn');
    }
  })
})

els_02.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 1800){
       fadeIn.classList.add('is-scrollIn');
    }
  })
})

window.dispatchEvent(new Event('scroll'));