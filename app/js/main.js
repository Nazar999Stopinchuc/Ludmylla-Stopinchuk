$(function () {

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

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu-mob');
  const bodyLock = document.querySelector('body');


  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-mob--active');

    if (mobileMenu.classList.contains('menu-mob--active')) {
      burger.classList.add('burger--active');
      bodyLock.classList.add('lock')
    }
    else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock')
    }
  });

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


var mixer = mixitup('.categories__content');
mixer.filter('.category-1');