!function(){const t=document.querySelector(".tabs");window.showTabWholesale=function(a){1===a?(t.classList.remove("tab__shop","tab__horeca","tab__sport-club","tab__confectionery"),t.classList.add("tab__super-market")):2===a?(t.classList.remove("tab__super-market","tab__horeca","tab__sport-club","tab__confectionery"),t.classList.add("tab__shop")):3===a?(t.classList.remove("tab__super-market","tab__shop","tab__sport-club","tab__confectionery"),t.classList.add("tab__horeca")):4===a?(t.classList.remove("tab__super-market","tab__shop","tab__horeca","tab__confectionery"),t.classList.add("tab__sport-club")):5===a&&(t.classList.remove("tab__super-market","tab__shop","tab__horeca","tab__sport-club"),t.classList.add("tab__confectionery"))},showTabWholesale(1)}();