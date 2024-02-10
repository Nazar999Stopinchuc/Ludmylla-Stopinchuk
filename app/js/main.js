$(function () {

  $('.burger').click(function () {
    $('.burger').addClass('burger--active');
    $('.menu-mob').addClass('menu-mob--active');
    $('body').addClass('lock');
  });

  $('.menu__link').click(function () {
    $('.burger').removeClass('burger--active');
    $('.menu-mob').removeClass('menu-mob--active');
    $('body').removeClass('lock');
  });

  $('.content__link').click(function () {
    $('.content').removeClass('content--active');
    $('body').removeClass('lock-l');
  });


  let $page = $('html, body');
  $('.contact, .footer__logo, .first-screen__scroll').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

  $('.about__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '40px',
    centerMode: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          initialSlide: 0,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: false,
        }
      }
    ]
  });

});

window.onscroll = function headerFixed() {
  let header = document.querySelector('.header__wrap');

  if (window.pageYOffset > 55) {
    header.classList.add('header__wrap--fixed');
  } else {
    header.classList.remove('header__wrap--fixed');
  }
};

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


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu-mob');
  const bodyLock = document.querySelector('body');

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu-mob--active');
      bodyLock.classList.remove('lock');
    }
  });

});


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

"use strict"
//==========================================
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



if (document.getElementById('mix')){
var mixer = mixitup('.categories__content');
mixer.filter('.category-1');
};