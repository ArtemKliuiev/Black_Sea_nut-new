//Табуляция доставка и оплата
const personalMain = document.querySelector('body')
function personalTab (number) {
  if(number===1){
    personalMain.classList.remove('history-transaction', 'contact-inform','password','adress' )
    personalMain.classList.add('history-order')
  }else if(number===2){
    personalMain.classList.remove('history-order', 'contact-inform','password','adress' )
    personalMain.classList.add('history-transaction')
  }else if(number===3){
    personalMain.classList.remove('history-transaction', 'history-order','password','adress' )
    personalMain.classList.add('contact-inform')
  }else if(number===4){
    personalMain.classList.remove('history-transaction', 'contact-inform','history-order','adress' )
    personalMain.classList.add('password')
  }else if(number===5){
    personalMain.classList.remove('history-transaction', 'contact-inform','password','history-order' )
    personalMain.classList.add('adress')
  }
};

// Получаем список всех выпадающих списков
const customSelects = document.querySelectorAll('.custom-select');

// Проходимся по каждому выпадающему списку и привязываем события
customSelects.forEach((select) => {
  const selectedOption = select.querySelector('.custom-select__option');
  const optionsList = select.querySelector('.custom-select__list');
  const options = optionsList.querySelectorAll('li');

  selectedOption.addEventListener('click', () => {
    // При клике на выбранную опцию отображаем или скрываем список опций
    // optionsList.style.display = optionsList.style.display === 'none' ? 'block' : 'none';
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      selectedOption.textContent = option.textContent;

      options.forEach((option) => {
        option.classList.remove('selected');
      });

      option.classList.add('selected');
      
    });
  });
});


