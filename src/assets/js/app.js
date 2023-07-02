const linkSelectors = [
  '.link-row__link1',
  '.link-row__link2',
  '.link-row__link3',
  '.link-row__link4',
  '.link-row__link5',
  '.link-row__link6'
];

const bottomMenuSelectors = [
  '.bottom-menu__link1',
  '.bottom-menu__link2',
  '.bottom-menu__link3',
  '.bottom-menu__link4',
  '.bottom-menu__link5',
  '.bottom-menu__link6',
  '.bottom-menu__link7'
];


function clearDynamicScripts() {
  const scripts = Array.from(document.head.getElementsByTagName('script'));
  scripts
    .filter(script => script.getAttribute('data-dynamic') === 'true')
    .forEach(script => script.remove());
}


function refreshBrowserScriptInfo() {
  const tempScript = document.createElement('script');
  document.head.appendChild(tempScript);
  document.head.removeChild(tempScript);
}


function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  script.setAttribute('data-dynamic', 'true');
  document.head.appendChild(script);
}


function loadPage(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("content").innerHTML = this.responseText;

      const activeElements = document.querySelectorAll('.active');
      activeElements.forEach(element => {
        element.classList.remove('active');
      });

      const linkIndex = url.slice(4, 5);
      const linkElement = document.querySelector(linkSelectors[linkIndex - 1]);
      if (linkElement) linkElement.classList.add('active');

      const bottomMenuIndex = url.slice(4, 5);
      const bottomMenuElement = document.querySelector(bottomMenuSelectors[bottomMenuIndex - 1]);
      if (bottomMenuElement) bottomMenuElement.classList.add('active');

      clearDynamicScripts();
      refreshBrowserScriptInfo();

      
      if (url === 'page1.html') {
          loadScript('assets/js/store.js');
          loadScript('assets/js/goods.js');
          const customSelectsTwo = document.querySelectorAll('.custom-select');


      customSelectsTwo.forEach((select) => {
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
        
        
      } else if (url === 'page2.html') {
          loadScript('assets/js/production.js');
          let yTube = document.querySelector("#movie_player > div.ytp-chrome-bottom");
          let videoSlider = document.querySelector('.swiper-slide1');
          letarrowSlider = document.querySelector('.slider-arrow');
          videoSlider.onclick = function(){
            this.classList.add('ready');
            arrowSlider.classList.add('ready');
          }
          let videoSlider2 = document.querySelector('.swiper-slide2');
          videoSlider2.onclick = function(){
            this.classList.add('ready');
            arrowSlider.classList.add('ready');
          }
          let videoSlider3 = document.querySelector('.swiper-slide3');
          videoSlider3.onclick = function(){
            this.classList.add('ready');
            arrowSlider.classList.add('ready');
          }


        //Бесконечная прогрузка Галерея
        var galleryDiv = document.querySelector(".gallery");
        var loadMoreButton = document.getElementById("load_more_button");
        var lastGalleryClone = galleryDiv; // Ссылка на последний клон

        function duplicateGallery() {
          var galleryClone = galleryDiv.cloneNode(true);
          lastGalleryClone.parentNode.insertBefore(galleryClone, lastGalleryClone.nextSibling);
          lastGalleryClone = galleryClone; // Обновляем ссылку на последний клон
        }

        loadMoreButton.addEventListener("click", duplicateGallery);
      } else {
        loadScript('другой скрипт');
      }

      // Назначить обработчик клика на каждую ссылку
      const links = document.querySelectorAll('.link');
      links.forEach(link => {
        link.addEventListener('click', linkClickHandler);
      });
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

// Обработчик клика на ссылку
function linkClickHandler(event) {
  event.preventDefault();
  const url = event.target.href;
  loadPage(url);
}

// Назначить обработчик клика на каждую ссылку
const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('click', linkClickHandler);
});

loadPage("page1.html");


//Бургер
let burgerOn = document.querySelector('.adaptive-header__burger');
let burgerOff = document.querySelector('.link-row__exit-burger')
let body = document.querySelector('body')
burgerOn.onclick = () => {
  body.classList.add('adaptive-menu-active');
}
burgerOff.onclick = () => {
  body.classList.remove('adaptive-menu-active');
}


//Видео о производстве
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

//Видео доставка и оплата
window.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.delivery-video');
  const button = document.querySelector('.delivery-video__button');
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

//Видео галерея
//Видео 1
window.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.gallery__image3');
  const button = document.querySelector('.gallery__video-button1');
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




//Видео 2
window.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.gallery__image6');
  const button = document.querySelector('.gallery__video-button2');
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






//Видео 3
window.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.gallery__image9');
  const button = document.querySelector('.gallery__video-button3');
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

//Видео 4
window.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.gallery__image12');
  const button = document.querySelector('.gallery__video-button4');
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


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 46.4310976, lng: 30.7147007 },
    zoom: 16,
    styles: [
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "lightness": 100 },
          { "visibility": "simplified" }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "on" },
          { "color": "#C6E2FF" }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#C5E3BF" }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#D1D1B8" }
        ]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: { lat: 46.4310976, lng: 30.7147007 },
    map: map,
    title: 'Местоположение маркера'
  });
}




var basket = document.querySelector('.request-call__basket');
var bodyT = document.querySelector('body');
var basketHover = document.querySelector('.basket-hover');

basket.addEventListener('click', function(event) {
  event.stopPropagation(); // Остановить всплытие события, чтобы не срабатывал клик на body
  bodyT.classList.add('hide');
});

document.addEventListener('click', function(event) {
  if (!basketHover.contains(event.target)) {
    bodyT.classList.remove('hide');
  }
});

var decreaseButtons = document.getElementsByClassName("decreaseButton");
var increaseButtons = document.getElementsByClassName("increaseButton");
var numberElements = document.getElementsByClassName("number");

function attachEventHandlers() {
  for (var i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", decreaseNumber);
  }

  for (var i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", increaseNumber);
  }
}

function decreaseNumber() {
  var numberElement = this.parentNode.getElementsByClassName("number")[0];
  var currentValue = parseInt(numberElement.textContent);
  if (currentValue > 0) {
    numberElement.textContent = currentValue - 1;
  }
}

function increaseNumber() {
  var numberElement = this.parentNode.getElementsByClassName("number")[0];
  var currentValue = parseInt(numberElement.textContent);
  numberElement.textContent = currentValue + 1;
}

attachEventHandlers();