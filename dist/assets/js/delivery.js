const mainDelivery=document.querySelector(".main-delivery");function showTab(e){1===e?(mainDelivery.classList.remove("lorry-active","package-active"),mainDelivery.classList.add("wallet-active")):2===e?(mainDelivery.classList.remove("wallet-active","package-active"),mainDelivery.classList.add("lorry-active")):3===e&&(mainDelivery.classList.remove("lorry-active","wallet-active"),mainDelivery.classList.add("package-active"))}showTab(1);