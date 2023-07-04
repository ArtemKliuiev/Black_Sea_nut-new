(function() {
  var swiper = new Swiper(".mySwiper1", {
    loop: true,
    navigation: {
      nextEl: ".product__slider-right1",
      prevEl: ".product__slider-left1",
    },
  });

  const mainDelivery = document.querySelector('.block-info');
  window.showTab = function(number) {
    if (number === 1) {
      mainDelivery.classList.remove('package', 'payment', 'delivery');
      mainDelivery.classList.add('description');
    } else if (number === 2) {
      mainDelivery.classList.remove('description', 'payment', 'delivery');
      mainDelivery.classList.add('package');
    } else if (number === 3) {
      mainDelivery.classList.remove('description', 'package', 'delivery');
      mainDelivery.classList.add('payment');
    } else if (number === 4) {
      mainDelivery.classList.remove('payment', 'package', 'description');
      mainDelivery.classList.add('delivery');
    }
  };

  showTab(1);
})();

