const videoContainer = document.querySelector('[data-video]');
const poster = videoContainer.querySelector('[data-video-poster]');
const button = videoContainer.querySelector('[data-video-button]');

const initVideo = () => {
  if (videoContainer && button && poster) {
    button.addEventListener('click', (evt) => {
      if (videoContainer.classList.contains('gym__videoplayer')) {
        return;
      }
      evt.preventDefault();
      poster.remove();
      button.remove();
      videoContainer.insertAdjacentHTML('afterbegin', '<iframe width="364" height="228" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    });
  }
};

export {initVideo};
