// $(function(){

// });
// Swiper slider
new Swiper(".creators-swiper", {
  spaceBetween: 30,
  speed: 800,
  loop: true,
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

new Swiper(".explore-more__slider", {
  spaceBetween: 30,
  speed: 800,
  slidesPerView: 4,
  navigation: {
    nextEl: ".explore-more-next",
    prevEl: ".explore-more-prev",
  },
});

// Filter MisitUp

if (document.querySelector(".explore__cards")) {
  let mixer = mixitup(".explore__cards", {
    animation: {
      easing: "ease-in-out",
      duration: 800,
    },
  });
}

// Небольшой аккордеон
const filterTitle = document.querySelectorAll(".filter__item-title");
filterTitle.forEach((el) => {
  el.addEventListener("click", () => {
    const content = el.nextElementSibling;
    el.classList.toggle("filter__item-title--arrow");
    content.classList.toggle("content-hidden");
  });
});

// Выявляем URL страницы
const linkHeader = document.querySelectorAll(".menu__item-link");
linkHeader.forEach((el) => {
  if (window.location.pathname == `/${el.getAttribute("href")}`) {
    document.querySelectorAll(".menu__item-link").forEach((el) => {
      el.classList.remove("menu__item-link--active");
    });
    el.classList.add("menu__item-link--active");
  }
});

// Простые табы
const tabsBtn = document.querySelectorAll(".tab-btn"),
  tabsItem = document.querySelectorAll(".tab-item"),
  tabsContent = document.querySelectorAll(".tabs-content");

function onTabClick(el) {
  el.addEventListener("click", (e) => {
    let current = e.target;
    let tabsBtnAttr = current.dataset.tab;

    if (!current.classList.contains("tab-btn--active")) {
      tabsBtn.forEach((item) => {
        item.classList.remove("tab-btn--active");
      });

      tabsItem.forEach((item) => {
        item.classList.remove("tab-item--active");
      });

      current.classList.add("tab-btn--active");
      document
        .querySelector(`${tabsBtnAttr}`)
        .classList.add("tab-item--active");
    }
  });
}
tabsBtn.forEach(onTabClick);
if(document.querySelector(".tab-btn")) {
  document.querySelector(".tab-btn").click();
}


// Сделать клик по кнопке author-account__follow, чтоб менялся цвет и надпись о подписке



function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  
  return {
    total,
    hours,
    minutes,
    seconds
  };
}
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const hoursSpan = clock.querySelector('.card-item__hour');
  const minutesSpan = clock.querySelector('.card-item__minutes');
  const secondsSpan = clock.querySelector('.card-item__second');


  function updateClock() {
    const t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 1 * 18 * 24 * 47 * 1000);
const deadline2 = new Date(Date.parse(new Date()) + 3 * 3 * 24 * 31 * 1000);
const deadline1 = new Date(Date.parse(new Date()) + 2 * 8 * 24 * 29 * 1000);
const deadline3 = new Date(Date.parse(new Date()) + 4 * 23 * 24 * 53 * 1000);
const deadline4 = new Date(Date.parse(new Date()) + 1 * 9 * 24 * 11 * 1000);
initializeClock('one', deadline);
initializeClock('two', deadline1);
initializeClock('three', deadline);
initializeClock('four', deadline3);
initializeClock('five', deadline);
initializeClock('six', deadline3);
initializeClock('seven', deadline);
initializeClock('seven', deadline);
