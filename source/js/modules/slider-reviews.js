import Swiper from '../vendor/swiper';

const reviewsSlider = document.querySelector('[data-reviews-slider]');
const buttonNext = document.querySelector('[data-reviews-next]');
const buttonPrev = document.querySelector('[data-reviews-prev]');

const initReviewsSlider = () => {
  return new Swiper(reviewsSlider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: false,
    breakpoints: {
      1366: {
        allowTouchMove: false,
        initialSlide: 1,
      },

      768: {
        allowTouchMove: true,
        initialSlide: 1,
      },

      320: {
        allowTouchMove: true,
        initialSlide: 1,
      },
    },
  });
};

const setInitReviewsSlider = () => {
  if (reviewsSlider) {
    initReviewsSlider();
  }
};

export {setInitReviewsSlider};
