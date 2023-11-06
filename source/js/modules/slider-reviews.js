import Swiper from '../vendor/swiper';

const reviewsSlider = document.querySelector('[data-reviews-slider]');
const buttonNext = document.querySelector('[data-reviews-next]');
const buttonPrev = document.querySelector('[data-reviews-prev]');

const initReviewsSlider = () => {
  if (reviewsSlider) {
    // eslint-disable-next-line no-new
    new Swiper(reviewsSlider, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: false,
      breakpoints: {
        1366: {
          allowTouchMove: false,
        },

        768: {
          allowTouchMove: true,
        },

        320: {
          allowTouchMove: true,
        },
      },
    });
  }
};

export {initReviewsSlider};
