// $(function(){
  
// });

// Swiper slider
new Swiper(".creators-swiper", {
  spaceBetween: 30,
  speed: 800,
  slidesPerView: 6,
  navigation: {
    nextEl: ".creators-swiper-next",
    prevEl: ".creators-swiper-prev",
  },
});

// Filter MisitUp

var mixer = mixitup('.explore__cards', {
  animation: {
    easing: 'ease-in-out',
    duration: 800,
}
});