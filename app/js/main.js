// $(function(){
  
// });

// Swiper slider
new Swiper(".creators-swiper", {
  spaceBetween: 30,
  speed: 800,
  slidesPerView: 6,
  navigation: {
    nextEl: ".creators-next",
    prevEl: ".creators-prev",
  },
});

new Swiper(".collections-slider", {
  spaceBetween: 30,
  speed: 800,
  slidesPerView: 3,
  navigation: {
    nextEl: ".collections-next",
    prevEl: ".collections-prev",
  },
});

new Swiper(".questions-slider", {
  spaceBetween: 30,
  speed: 800,
  slidesPerView: 3,
  navigation: {
    nextEl: ".questions-next",
    prevEl: ".questions-prev",
  },
});

// Filter MisitUp

var mixer = mixitup('.explore__cards', {
  animation: {
    easing: 'ease-in-out',
    duration: 800,
}
});