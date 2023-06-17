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