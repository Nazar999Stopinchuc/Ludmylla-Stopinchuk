"use strict"

//////////////slider///////////////////

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
  speed: 300,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }
});

//////////////slider///////////////////


///////////////burger/////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu-mob');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    burger.classList.add('burger--active');
    mobileMenu.classList.add('menu-mob--active');
    body.classList.add('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu-mob--active');
      body.classList.remove('lock');
    }
  });

});

///////////////burger/////////////////////////


//////////////sticky header//////////////////////

window.onscroll = function headerFixed() {
  let header = document.querySelector('.header__wrap');

  if (window.pageYOffset > 55) {
    header.classList.add('header__wrap--fixed');
  } else {
    header.classList.remove('header__wrap--fixed');
  }
};

//////////////sticky header//////////////////////

/////////////Open content/////////////////////

if (document.getElementById('content')) {
document.addEventListener('DOMContentLoaded', () => {
  const contentOpen = document.querySelector('.content-btn');
  const content = document.querySelector('.content');
  const bodyLock = document.querySelector('body');

  contentOpen.addEventListener('click', function () {
    content.classList.add('content--active');
    bodyLock.classList.add('lock-l');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== content && e.target !== contentOpen) {
      content.classList.remove('content--active');
      bodyLock.classList.remove('lock-l');
    }
  });
});
};

/////////////Open content/////////////////////


////////////scroll animation//////////////////

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('active');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim-items');

for (let elm of elements) {
  observer.observe(elm);
}
////////////scroll animation//////////////////


///////////Send Email Telegram///////////////

const TELEGRAM_BOT_TOKEN = '6474574391:AAFpD6y_4ViRwqv70fuoiJOunDnmeePQ77w';
const TELEGRAM_CHAT_ID = '-4110046168';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram(event) {
  event.preventDefault();

  const form = event.target;
  const formBtn = document.querySelector('.form__btn')
  const formSendResult = document.querySelector('.form__send-result')
  formSendResult.textContent = '';


  const { name, message, tel, } = Object.fromEntries(new FormData(form).entries());

  const text = `Лист від: ${name}! \nТелефон: ${tel}! \nПовідомлення: ${message}`;


  try {
    formBtn.textContent = 'Loading...';

    const response = await fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      })
    })

    if (response.ok) {
      formSendResult.textContent = 'Дякую за повідомлення!.';
      form.reset()
    } else {
      throw new Error(response.statusText);
    }

  } catch (error) {
    console.error(error);
    formSendResult.textContent = 'Повідомлення не відправлено! Спробуйте пізніше.';
    formSendResult.style.color = 'red';

  } finally {
    formBtn.textContent = 'Відправити';
  }
};

///////////Send Email Telegram///////////////


if (document.getElementById('mix')){
var mixer = mixitup('.categories__content');
mixer.filter('.category-1');
};
