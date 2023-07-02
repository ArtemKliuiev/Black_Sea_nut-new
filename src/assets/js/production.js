new Swiper('.about-production__slider-swiper', {
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

 new Swiper('.swiper-two', {
    // Optional parameters
    direction:  'horizontal',
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 32,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-arrow__button-right--two',
      prevEl: '.slider-arrow__button-left--two',
    },  

  });

  