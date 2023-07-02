new Swiper('.news-row__slider-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 33,
    direction: window.innerWidth <= 0 ? 'vertical' : 'horizontal',
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
  



  // const videoSwiper1 = document.querySelector('.swiper-slide__video1');
  // videoSwiper1.onclick = function(){
  //   this.classList.add('ready');
  // }
  // const videoSwiper2 = document.querySelector('.swiper-slide__video2');
  // videoSwiper2.onclick = function(){
  //   this.classList.add('ready');
  // }



// Получаем список всех выпадающих списков

////////////////////////////////////////////////////////////

new Swiper('.about-production__slider-swiper', {
  // Optional parameters
  direction:  'horizontal',
  loop: true,

  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize:35,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-arrow__button-right',
    prevEl: '.slider-arrow__button-left',
  },


});

