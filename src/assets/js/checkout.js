(function() {
  // Обработчик событий для радиокнопок
  var radioButtons = document.querySelectorAll('.custom-radio input[type="radio"]');
  const checkout = document.querySelector('.checkout');
  radioButtons.forEach(function(button) {
    button.addEventListener('change', function() {
      // Определить выбранную радиокнопку
      if (this.checked) {
        var selectedOption = this.value;

        // Выполнить различные действия в зависимости от выбранной опции
        if (selectedOption === 'option1') {
          // Действия для Option 1
          checkout.classList.remove('courier', 'stock');
          checkout.classList.add('new-mail');
        } else if (selectedOption === 'option2') {
          // Действия для Option 2
          checkout.classList.remove('new-mail', 'stock');
          checkout.classList.add('courier');
        } else if (selectedOption === 'option3') {
          // Действия для Option 3
          checkout.classList.remove('new-mail', 'courier');
          checkout.classList.add('stock');
        } 
      }
    });
  });

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
})();

