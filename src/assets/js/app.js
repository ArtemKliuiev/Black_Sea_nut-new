
// Получение элементов ссылок
var link1 = document.querySelector('.link-row__link1');
var link2 = document.querySelector('.link-row__link2');
var link3 = document.querySelector('.link-row__link3');
var link4 = document.querySelector('.link-row__link4');
var link5 = document.querySelector('.link-row__link5');
var link6 = document.querySelector('.link-row__link6');

var link21 = document.querySelector('.bottom-menu__link1');
var link22 = document.querySelector('.bottom-menu__link2');
var link23 = document.querySelector('.bottom-menu__link3');
var link24 = document.querySelector('.bottom-menu__link4');
var link25 = document.querySelector('.bottom-menu__link5');
var link26 = document.querySelector('.bottom-menu__link6');
var link27 = document.querySelector('.bottom-menu__link7');



function clearDynamicScripts() {
  var scripts = document.head.getElementsByTagName('script');
  for (var i = scripts.length - 1; i >= 0; i--) {
    if (scripts[i].getAttribute('data-dynamic') === 'true') {
      document.head.removeChild(scripts[i]);
    }
  }
}
clearDynamicScripts();

function refreshBrowserScriptInfo() {
  var tempScript = document.createElement('script');
  tempScript.textContent = ' ';
  document.head.appendChild(tempScript);
  document.head.removeChild(tempScript);
}


function loadScript(url) {
  var script = document.createElement('script');
  script.src = url;
  script.setAttribute('data-dynamic', 'true'); // Добавляем атрибут data-dynamic
  document.head.appendChild(script);
}


// Функция для загрузки страницы через XMLHttpRequest
function loadPage(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;

      // Получите все элементы с классом .active
      const activeElements = document.querySelectorAll('.active');

      // Переберите все найденные элементы и удалите класс .active
      activeElements.forEach(element => {
        element.classList.remove('active');
      });

      if (url == "page1.html") {
        link1.classList.add('active');
        link21.classList.add('active');
      } else if (url == 'page2.html') {
        link2.classList.add('active');
        link22.classList.add('active');
      } else if (url == 'page3.html') {
        link3.classList.add('active');
        link23.classList.add('active');
      } else if (url == 'page4.html') {
        link4.classList.add('active');
        link24.classList.add('active');
      } else if (url == 'page5.html') {
        link5.classList.add('active');
        link25.classList.add('active');
      }  else if (url == 'page7.html') {
        link27.classList.add('active');
      }

      // Выполнение кода после загрузки страницы
      if (url == 'page1.html') {
        clearDynamicScripts();
        refreshBrowserScriptInfo()
        loadScript('assets/js/store.js');
        loadScript('assets/js/goods.js');
      } else if (url == 'page2.html') {
        clearDynamicScripts();
        refreshBrowserScriptInfo()
        loadScript('assets/js/production.js');

      } else if (url == 'page3.html') {
        loadScript('другой скрипт');
      } else if (url == 'page4.html') {
        loadScript('другой скрипт');
      } else if (url == 'page5.html') {
        loadScript('другой скрипт');
      } else if (url == 'page6.html') {
        loadScript('другой скрипт');
      } else if (url == 'page7.html') {
        loadScript('другой скрипт');
      } else if (url == 'page8.html') {
        loadScript('другой скрипт');
      } 
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

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