// eslint-disable-next-line no-unused-vars
import Swiper from '../vendor/swiper';

const jurySlider = document.querySelector('[data-jury-slider]');
const buttonNext = document.querySelector('.jury__button--next');
const buttonPrev = document.querySelector('.jury__button--prev');

const initJurySlider = () => {
  // eslint-disable-next-line no-new
  new Swiper(jurySlider, {

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: true,
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
        allowTouchMove: false,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
};

export {initJurySlider};
