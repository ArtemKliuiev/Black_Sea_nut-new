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


  // const videoSwiper1 = document.querySelector('.swiper-slide__video1');
  // videoSwiper1.onclick = function(){
  //   this.classList.add('ready');
  // }
  // const videoSwiper2 = document.querySelector('.swiper-slide__video2');
  // videoSwiper2.onclick = function(){
  //   this.classList.add('ready');
  // }



// Получаем список всех выпадающих списков
const customSelects = document.querySelectorAll('.custom-select');

// Проходимся по каждому выпадающему списку и привязываем события
customSelects.forEach((select) => {
  const selectedOption = select.querySelector('.custom-select__option');
  const optionsList = select.querySelector('.custom-select__list');
  const options = optionsList.querySelectorAll('li');

  selectedOption.addEventListener('click', () => {
    // При клике на выбранную опцию отображаем или скрываем список опций
    // optionsList.style.display = optionsList.style.display === 'none' ? 'block' : 'none';
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      selectedOption.textContent = option.textContent;

      options.forEach((option) => {
        option.classList.remove('selected');
      });

      option.classList.add('selected');

      // optionsList.style.display = 'none';

      if (select.classList.contains('custom-select-1')) {
        // Действия для первого списка
        if (option.textContent === 'Сладкие') {
          console.log('Выбрана Сладкие');
        } else if (option.textContent === 'Соленые') {
          console.log('Выбрана Соленые');
        }
      } else if (select.classList.contains('custom-select-2')) {
        // Действия для второго списка
        if (option.textContent === '40г') {
          console.log('Выбрана 40г');
        } else if (option.textContent === '80г') {
          console.log('Выбрана 80г');
        }
      }
      
    });
  });
});
