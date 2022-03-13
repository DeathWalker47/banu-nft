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

// Небольшой аккордеон
const filterTitle = document.querySelectorAll('.filter__item-title');
filterTitle.forEach(el => {
  el.addEventListener('click', () => {
    const content = el.nextElementSibling;
    el.classList.toggle('filter__item-title--arrow')
    content.classList.toggle('content-hidden');
  })
})


// Выявляем URL страницы
const linkHeader = document.querySelectorAll('.menu__item-link');
linkHeader.forEach(el => {
  if(window.location.pathname == `/${el.getAttribute('href')}`) {
    document.querySelectorAll('.menu__item-link').forEach(el => {
      el.classList.remove('menu__item-link--active')
    })
    el.classList.add('menu__item-link--active')
  }
})
