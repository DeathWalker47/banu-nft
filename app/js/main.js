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
const tabsBtn = document.querySelectorAll(".tabs__nav-btn"),
  tabsItem = document.querySelectorAll(".tabs__content-item"),
  tabsContent = document.querySelector(".tabs__content");

function onTabClick(el) {
  el.addEventListener("click", (e) => {
    let current = e.target;
    let tabsBtnAttr = current.dataset.tab;

    if (!current.classList.contains("tabs__nav-btn--active")) {
      tabsBtn.forEach((item) => {
        item.classList.remove("tabs__nav-btn--active");
      });

      tabsItem.forEach((item) => {
        item.classList.remove("tabs__content-item--active");
      });

      current.classList.add("tabs__nav-btn--active");
      tabsContent
        .querySelector(`${tabsBtnAttr}`)
        .classList.add("tabs__content-item--active");
    }
  });
}
tabsBtn.forEach(onTabClick);

document.querySelector(".tabs__nav-btn").click();