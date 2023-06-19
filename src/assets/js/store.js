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


  const videoSwiper1 = document.querySelector('.swiper-slide__video1');
  videoSwiper1.onclick = function(){
    this.classList.add('ready');
  }
  const videoSwiper2 = document.querySelector('.swiper-slide__video2');
  videoSwiper2.onclick = function(){
    this.classList.add('ready');
  }
