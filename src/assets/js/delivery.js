//Табуляция доставка и оплата
(function() {
  const mainDelivery = document.querySelector('.main-delivery');
  window.showTab = function(number) {
    if (number === 1) {
      mainDelivery.classList.remove('lorry-active', 'package-active');
      mainDelivery.classList.add('wallet-active');
    } else if (number === 2) {
      mainDelivery.classList.remove('wallet-active', 'package-active');
      mainDelivery.classList.add('lorry-active');
    } else if (number === 3) {
      mainDelivery.classList.remove('lorry-active', 'wallet-active');
      mainDelivery.classList.add('package-active');
    }
  };

  showTab(1);
})();

(function() {
  const videoElements = document.querySelectorAll('.video');

  videoElements.forEach(function(videoElement) {
    videoElement.addEventListener('click', function() {
      this.classList.add('ready');
    });
  });
})();

