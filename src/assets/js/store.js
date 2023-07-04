(function() {
  var swiperNews;

  function initializeSwiperNews() {
    swiperNews = new Swiper('.news-row__slider-swiper', {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 33,
      direction: getDirection(),
      navigation: {
        nextEl: '.news-row__button-right',
        prevEl: '.news-row__button-left',
      },
      on: {
        resize: function() {
          swiperNews.changeDirection(getDirection()); // Заменил swiper на swiperNews
        },
      },
      breakpoints: {
        1360: {
          slidesPerView: 3,
        },
        915: {
          slidesPerView: 2,
        }
      }
    });
  }

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 0 ? 'vertical' : 'horizontal';

    return direction;
  }

  initializeSwiperNews(); // Вызываем функцию инициализации swiperNews

})();

(function() {
  var videoSwiper1 = document.querySelector('.swiper-slide__video1');
  var videoSwiper2 = document.querySelector('.swiper-slide__video2');

  if (videoSwiper1) { // Добавляем проверку на существование элемента
    videoSwiper1.onclick = function() {
      this.classList.add('ready');
    }
  }

  if (videoSwiper2) { // Добавляем проверку на существование элемента
    videoSwiper2.onclick = function() {
      this.classList.add('ready');
    }
  }
})();

(function() {
  var customSelectsTwo = document.querySelectorAll('.custom-select');

  customSelectsTwo.forEach(function(select) {
    var selectedOption = select.querySelector('.custom-select__option');
    var optionsList = select.querySelector('.custom-select__list');
    var options = optionsList.querySelectorAll('li');

    selectedOption.addEventListener('click', function() {
      // optionsList.style.display = optionsList.style.display === 'none' ? 'block' : 'none';
    });

    options.forEach(function(option) {
      option.addEventListener('click', function() {
        selectedOption.textContent = option.textContent;

        options.forEach(function(option) {
          option.classList.remove('selected');
        });

        option.classList.add('selected');

        // optionsList.style.display = 'none';

        if (select.classList.contains('custom-select-1')) {
          if (option.textContent === 'Сладкие') {
            console.log('Выбрана Сладкие');
          } else if (option.textContent === 'Соленые') {
            console.log('Выбрана Соленые');
          }
        } else if (select.classList.contains('custom-select-2')) {
          if (option.textContent === '40г') {
            console.log('Выбрана 40г');
          } else if (option.textContent === '80г') {
            console.log('Выбрана 80г');
          }
        }
      });
    });
  });
})();

(function() {
  var swiperStore;

  function initializeSwiperStore() {
    swiperStore = new Swiper('.about-production__slider-swiper', {
      direction: 'horizontal',
      loop: true,
      effect: 'cube',
      cubeEffect: {
        slideShadows: false,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 35,
      },
      navigation: {
        nextEl: '.slider-arrow__button-right',
        prevEl: '.slider-arrow__button-left',
      },
    });
  }

  initializeSwiperStore();
})();

