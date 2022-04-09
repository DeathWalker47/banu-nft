// Счетчик цифр
const countNumbres = document.querySelectorAll(".top__item-num");

function counter(ms, elem, number) {
  let counter = 0;
  let interval = setInterval(() => {
    elem.textContent = ++counter + "k+";
    counter === number ? clearInterval(interval) : false;
  }, ms);
}

countNumbres.forEach((el) => {
  let self = Number(el.dataset.num);
  el.textContent = self + "k+";
  counter(100, el, self);
});

// Swiper slider
const slidersFunction = function (sliderClassName, SlidePerView, next, prev) {
  new Swiper(sliderClassName, {
    spaceBetween: 30,
    speed: 800,
    loop: true,
    slidesPerView: SlidePerView,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
};
// Слайдер Creators
slidersFunction(".creators-swiper", 6, ".creators-next", ".creators-prev");

// Слайдер Collections
slidersFunction(
  ".collections-slider",
  3,
  ".collections-next",
  ".collections-prev"
);

// Слайдер Questions
slidersFunction(".questions-slider", 3, ".questions-next", ".questions-prev");

// Слайдер Explore-more
slidersFunction(
  ".explore-more__slider",
  4,
  ".explore-more-next",
  ".explore-more-prev"
);

// Filter MisitUp

if (document.querySelector(".explore__cards")) {
  let mixer = mixitup(".explore__cards", {
    animation: {
      easing: "ease-in-out",
      duration: 800,
    },
  });
}

// Клик по точкам на карточке
const dotsMenu = document.querySelectorAll(".card-item__content-dots");
dotsMenu.forEach((el) => {
  el.addEventListener("click", (e) => {
    const self = e.currentTarget;
    if (
      self.nextElementSibling.classList.contains("card-item__drop-list--active")
    ) {
      document.querySelectorAll(".card-item__drop-list").forEach((ele) => {
        ele.classList.remove("card-item__drop-list--active");
      });
    } else {
      document.querySelectorAll(".card-item__drop-list").forEach((ele) => {
        ele.classList.remove("card-item__drop-list--active");
      });
      self.nextElementSibling.classList.toggle("card-item__drop-list--active");
    }
  });
});

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
document.querySelector(".tab-btn")?.click();

// Таймер аукцина
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  return {
    total,
    hours,
    minutes,
    seconds,
  };
}
function initializeClock(id, endtime) {
  const clock = document?.getElementById(id);
  const hoursSpan = clock?.querySelector(".card-item__hour");
  const minutesSpan = clock?.querySelector(".card-item__minutes");
  const secondsSpan = clock?.querySelector(".card-item__second");

  function updateClock() {
    const t = getTimeRemaining(endtime);
    if (clock) {
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }

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
initializeClock("one", deadline);
initializeClock("two", deadline1);
initializeClock("three", deadline);
initializeClock("four", deadline3);
initializeClock("five", deadline);
initializeClock("six", deadline3);
initializeClock("seven", deadline);

// имплиментация hover эффекта на меню
linkHeader.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    const self = e.target;

    linkHeader.forEach((elem) => {
      elem.style.filter = "blur(1px)";

      if (
        self.classList.contains("menu__item-link--drop") ||
        self.classList.contains("dropdown-menu__link")
      ) {
        document
          .querySelectorAll(".dropdown-menu__link")
          .forEach((link) => (link.style.filter = "blur(0px)"));
      }
    });

    self.style.filter = "blur(0px)";
  });
  el.addEventListener("mouseout", (e) => {
    linkHeader.forEach((elem) => (elem.style.filter = "blur(0px)"));
  });
});

// Имплиментация клика по кнопке Follow (изменение текта, цвета бордера и фона)
const follow = document.querySelectorAll(".author-account__follow");
const cartBid = document.querySelectorAll(".card-item__bid");

const followSettings = function (elem, content, borderColor, backgroundColor) {
  elem.textContent = content;
  elem.style.borderColor = borderColor;
  elem.style.background = backgroundColor;
};

follow.forEach((el) => {
  let followBullet = true;
  el.addEventListener("click", (e) => {
    const self = e.target;
    followBullet
      ? followSettings(
          self,
          "Unfollow",
          "#ff512f",
          "linear-gradient(93.95deg, #ff512f 0%, #dd2476 100%)"
        )
      : followSettings(self, "Follow", "#a1a1a1", "transparent");
    followBullet = !followBullet;
  });
});

cartBid.forEach((el) => {
  let bidBullet = true;

  el.addEventListener("click", (e) => {
    e.preventDefault();
    const self = e.target;
    if (!el.classList.contains("card-item__price")) {
      if (el.classList.contains("descriptions__link")) {
        bidBullet
          ? followSettings(
              self,
              "Accepted",
              "transparent",
              "linear-gradient(93.95deg, #ff512f 0%, #dd2476 100%)"
            )
          : followSettings(
              self,
              "Place a bid",
              "transparent",
              "#ff512f 0%, #dd2476 100%"
            );
        bidBullet = !bidBullet;
      } else {
        bidBullet
          ? followSettings(
              self,
              "Accepted",
              "transparent",
              "linear-gradient(93.95deg, #ff512f 0%, #dd2476 100%)"
            )
          : followSettings(self, "Place a bid", "transparent", "#09080d");
        bidBullet = !bidBullet;
      }
    }
  });
});

// Имплиментация клика по сердцу
const heartFill = document.querySelectorAll(".card-item__like-btn");
const cardLikes = document.querySelectorAll(".card-item__like-num");

// здесь я присваиваю значение дата атрибута каждому элементу
cardLikes.forEach((el) => {
  let likeNumb = Number(el.dataset.likeNumber);
  el.textContent = likeNumb;
});

const heartSettings = function (
  elem,
  attrStoke,
  colorStroke,
  attrFill,
  colorFill
) {
  elem.setAttribute(attrStoke, colorStroke);
  elem.setAttribute(attrFill, colorFill);
};

heartFill.forEach((el) => {
  let heartBull = true;

  el.addEventListener("click", (e) => {
    const self = e.currentTarget;
    const heartnNumb = self.nextElementSibling; // Следующий элемент от того, на который нажал
    let heartLikes = Number(self.nextElementSibling.dataset.likeNumber); // дата атрибут следующего элемента

    // Если значение тру,то меняем цвет сердца и увеличиваем лайки на 1
    if (heartBull) {
      heartSettings(
        self.querySelector("path"),
        "stroke",
        "#ff512f",
        "fill",
        "#ff512f"
      );
      heartLikes++; // увеличиваем значение на 1
      heartnNumb.textContent = heartLikes;
    } else {
      // В противном случае убираем цвет сердца и возвращаем лайки в исходное положение
      heartSettings(
        self.querySelector("path"),
        "stroke",
        "#a1a1a1",
        "fill",
        "none"
      );
      heartnNumb.textContent = heartLikes;
    }
    heartBull = !heartBull;
  });
});

const auctionsBlock = document.querySelector(".auctions__items");
const auctionsItems = auctionsBlock.querySelectorAll(".cards__item");
const auctionsLink = auctionsBlock.querySelector(".explore__items-link");
if (auctionsItems.length <= 8) {
  auctionsLink.style.display = "none";
} else {
  auctionsLink.style.display = "inline-block";
}
auctionsLink.addEventListener("click", (e) => {
  e.preventDefault();
  const self = e.currentTarget;
  auctionsItems.forEach((el) => el.style.display = "block");
    self.style.display = "none";
});
console.log(auctionsItems.length);
