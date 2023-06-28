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

      // optionsList.style.display = 'none';

      if (select.classList.contains('custom-select-1')) {
        // Действия для первого списка
        if (option.textContent === 'Сладкие') {
          console.log('Выбрана Сладкие');
        } else if (option.textContent === 'Соленые') {
          console.log('Выбрана Соленые');
        }
      } else if (select.classList.contains('custom-select-2')) {
        // Действия для второго списка
        if (option.textContent === '40г') {
          console.log('Выбрана 40г');
        } else if (option.textContent === '80г') {
          console.log('Выбрана 80г');
        }
      }
      
    });
  });
});


//Табуляция доставка и оплата
const registration = document.querySelector('.registration')
function registrTab (number) {
  if(number===1){
    registration.classList.remove('legal-entity' )
    registration.classList.add('natural-person')
  }else if(number===2){
    registration.classList.remove('natural-person')
    registration.classList.add('legal-entity')
  }
};


registrTab(1);

// Обработчик событий для радиокнопок
var radioButtons = document.querySelectorAll('.custom-radio input[type="radio"]');
radioButtons.forEach(function(button) {
  button.addEventListener('change', function() {
    // Определить выбранную радиокнопку
    if (this.checked) {
      var selectedOption = this.value;

      // Выполнить различные действия в зависимости от выбранной опции
      if (selectedOption === 'option1') {
        // Действия для Option 1
        registration.classList.remove('fop')
        registration.classList.add('legal')
      } else if (selectedOption === 'option2') {
        // Действия для Option 2
        registration.classList.remove('legal' )
        registration.classList.add('fop')
      } 
    }
  });
});
