const swiperAbout = new Swiper('.about-production__slider-swiper', {
    // Optional parameters
    direction:  'horizontal',
    loop: true,
  
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-arrow__button-right',
      prevEl: '.slider-arrow__button-left',
    },
  

  });

  // const swiperTwo = new Swiper('.swiper-two', {
  //   // Optional parameters
  //   direction:  'horizontal',
  //   // loop: true,
  //   slidesPerView: 3,
  //   spaceBetween: 32,
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.slider-arrow__button-right--two',
  //     prevEl: '.slider-arrow__button-left--two',
  //   },
  

  // });

  
  const yTube = document.querySelector("#movie_player > div.ytp-chrome-bottom");
  const videoSlider = document.querySelector('.swiper-slide1');
  const arrowSlider = document.querySelector('.slider-arrow');
  videoSlider.onclick = function(){
    this.classList.add('ready');
    arrowSlider.classList.add('ready');
  }
  const videoSlider2 = document.querySelector('.swiper-slide2');
  videoSlider2.onclick = function(){
    this.classList.add('ready');
    arrowSlider.classList.add('ready');
  }
  const videoSlider3 = document.querySelector('.swiper-slide3');
  videoSlider3.onclick = function(){
    this.classList.add('ready');
    arrowSlider.classList.add('ready');
  }


