import Swiper from '../vendor/swiper';

const jurySlider = document.querySelector('[data-jury-slider]');
const buttonNext = document.querySelector('[data-jury-next]');
const buttonPrev = document.querySelector('[data-jury-prev]');

const initJurySlider = () => {

  return new Swiper(jurySlider, {
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
        initialSlide: 2,
        allowTouchMove: true,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 2,
      },
    },
  });
};

const setInitJurySlider = () => {
  if (jurySlider) {
    initJurySlider();
  }
};

export {setInitJurySlider};
