var galleryDiv=document.querySelector(".gallery"),loadMoreButton=document.getElementById("load_more_button"),lastGalleryClone=galleryDiv;function duplicateGallery(){var e=galleryDiv.cloneNode(!0);lastGalleryClone.parentNode.insertBefore(e,lastGalleryClone.nextSibling),lastGalleryClone=e}loadMoreButton.addEventListener("click",duplicateGallery);