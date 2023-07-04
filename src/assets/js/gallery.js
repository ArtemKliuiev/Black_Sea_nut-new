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

(function() {
  const videoElements = document.querySelectorAll('.video');

  videoElements.forEach(function(videoElement) {
    videoElement.addEventListener('click', function() {
      this.classList.add('ready');
    });
  });
})();

