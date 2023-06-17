// Получение текущего пути страницы
var currentPagePath = window.location.pathname;

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

// Проверка текущей страницы и добавление класса "active" к соответствующей ссылке
if (currentPagePath.includes('page1.html')) {
  link1.classList.add('active');
  link21.classList.add('active');
} else if (currentPagePath.includes('page2.html')) {
  link2.classList.add('active');
  link22.classList.add('active');
} else if (currentPagePath.includes('page3.html')) {
  link3.classList.add('active');
  link23.classList.add('active');
} else if (currentPagePath.includes('page4.html')) {
  link4.classList.add('active');
  link24.classList.add('active');
} else if (currentPagePath.includes('page5.html')) {
  link5.classList.add('active');
  link25.classList.add('active');
} else if (currentPagePath.includes('page6.html')) {
  link6.classList.add('active');
  link26.classList.add('active');
} else if (currentPagePath.includes('page7.html')) {
  link27.classList.add('active');
}
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
//Табуляция доставка и оплата
const mainDelivery = document.querySelector('.main-delivery')
function showTab (number) {
  if(number===1){
    mainDelivery.classList.remove('lorry-active', 'package-active' )
    mainDelivery.classList.add('wallet-active')
  }else if(number===2){
    mainDelivery.classList.remove('wallet-active', 'package-active' )
    mainDelivery.classList.add('lorry-active')
  }else if(number===3){
    mainDelivery.classList.remove('lorry-active', 'wallet-active' )
    mainDelivery.classList.add('package-active')
  }
};
// showTab(1);

//Табуляция Оптовым и корпоративным клиентам

const tabs = document.querySelector('.tabs')
function showTabWholesale (number) {
  if(number===1){
    tabs.classList.remove('tab__shop', 'tab__horeca', 'tab__sport-club', 'tab__confectionery' );
    tabs.classList.add('tab__super-market');
  }else if(number===2){
    tabs.classList.remove('tab__super-market', 'tab__horeca', 'tab__sport-club', 'tab__confectionery' );
    tabs.classList.add('tab__shop');
  }else if(number===3){
    tabs.classList.remove('tab__super-market', 'tab__shop', 'tab__sport-club', 'tab__confectionery' );
    tabs.classList.add('tab__horeca');
  }else if(number===4){
    tabs.classList.remove('tab__super-market', 'tab__shop', 'tab__horeca', 'tab__confectionery' );
    tabs.classList.add('tab__sport-club');
  }else if(number===5){
    tabs.classList.remove('tab__super-market', 'tab__shop', 'tab__horeca', 'tab__sport-club' );
    tabs.classList.add('tab__confectionery');
  }
};



  // Функция для создания и добавления элемента <link> в <head>
  function loadCSS(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  // Отложенная загрузка файлов CSS
  window.addEventListener('load', function() {
    loadCSS('assets/fonts/Montserrat/stylesheet.css');
    loadCSS('assets/fonts/Gilroy/stylesheet.css');
    loadCSS('assets/fonts/Raleway/stylesheet.css');
    loadCSS('assets/fonts/icon-fonts/css/fontello.css');
    loadCSS('assets/css/reset.min.css');
    loadCSS('assets/css/style.min.css');
    loadCSS('assets/css/fonts.min.css');
    loadCSS('assets/css/elements.min.css');
    loadCSS('assets/css/header.min.css');
    loadCSS('assets/css/footer.min.css');
    loadCSS('{{ link-element }}');
    loadCSS('{{ link-swiper }}');
    loadCSS('{{ link-pages }}');
    loadCSS('{{ link-pages-two }}');
  });

