(function() {
  var swiperAbout = new Swiper('.about-production__slider-swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      nextEl: '.slider-arrow__button-right',
      prevEl: '.slider-arrow__button-left',
    },
  });

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

  var yTube = document.querySelector("#movie_player > div.ytp-chrome-bottom");
  var videoSlider = document.querySelector('.swiper-slide1');
  var arrowSlider = document.querySelector('.slider-arrow');
  if (videoSlider) {
    videoSlider.onclick = function() {
      this.classList.add('ready');
      arrowSlider.classList.add('ready');
    }
  }
  var videoSlider2 = document.querySelector('.swiper-slide2');
  if (videoSlider2) {
    videoSlider2.onclick = function() {
      this.classList.add('ready');
      arrowSlider.classList.add('ready');
    }
  }
  var videoSlider3 = document.querySelector('.swiper-slide3');
  if (videoSlider3) {
    videoSlider3.onclick = function() {
      this.classList.add('ready');
      arrowSlider.classList.add('ready');
    }
  }

})();



(function() {
  const videoElements = document.querySelectorAll('.video');

  videoElements.forEach(function(videoElement) {
    videoElement.addEventListener('click', function() {
      this.classList.add('ready');
    });
  });
})();

