new Swiper(".mySwiper1",{loop:!0,navigation:{nextEl:".product__slider-right1",prevEl:".product__slider-left1"}});let mainDelivery=document.querySelector(".block-info");function showTab(e){1===e?(mainDelivery.classList.remove("package","payment","delivery"),mainDelivery.classList.add("description")):2===e?(mainDelivery.classList.remove("description","payment","delivery"),mainDelivery.classList.add("package")):3===e?(mainDelivery.classList.remove("description","package","delivery"),mainDelivery.classList.add("payment")):4===e&&(mainDelivery.classList.remove("payment","package","description"),mainDelivery.classList.add("delivery"))}showTab(1);