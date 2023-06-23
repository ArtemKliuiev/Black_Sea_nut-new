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


  //////////
  var swiperNews = new Swiper('.news-row__slider-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 33,
    direction: getDirection(),
    navigation: {
      nextEl: '.news-row__button-right',
      prevEl: '.news-row__button-left',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
    breakpoints: {
      // Брейкпоинт 768 пикселей и меньше
      1360: {
        slidesPerView: 3,
      },
      // Брейкпоинт 576 пикселей и меньше
      915: {
        slidesPerView: 2,

      }
      // Добавьте другие брейкпоинты, если нужно
    }
  });
  

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 0 ? 'vertical' : 'horizontal';

    return direction;
  }