//Видео баннер
window.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.top-video');
    const button = document.querySelector('.top-video__button');
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      video.addEventListener('click', function () {
        if (video.classList.contains('ready')) {
          return;
        }
        video.classList.add('ready');
        button.insertAdjacentHTML('afterend', '<iframe src="https://www.youtube.com/embed/TdHGupJSMBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      });
    }
  });