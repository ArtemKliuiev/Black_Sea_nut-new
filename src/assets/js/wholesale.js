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

showTabWholesale(1);