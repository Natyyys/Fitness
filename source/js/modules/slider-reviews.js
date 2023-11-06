import Swiper from '../vendor/swiper';

const reviewsSlider = document.querySelector('[data-reviews-slider]');
const buttonNext = document.querySelector('.reviews__button--next');
const buttonPrev = document.querySelector('.reviews__button--prev');

const initReviewsSlider = () => {
  // eslint-disable-next-line no-new
  new Swiper(reviewsSlider, {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};

export {initReviewsSlider};
