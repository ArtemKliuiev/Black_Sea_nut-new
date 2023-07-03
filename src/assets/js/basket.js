(function() {
  var decreaseButtons = document.getElementsByClassName("decreaseButton");
  var increaseButtons = document.getElementsByClassName("increaseButton");
  var numberElements = document.getElementsByClassName("number");

  function attachEventHandlers() {
    for (var i = 0; i < decreaseButtons.length; i++) {
      decreaseButtons[i].addEventListener("click", decreaseNumber);
    }

    for (var i = 0; i < increaseButtons.length; i++) {
      increaseButtons[i].addEventListener("click", increaseNumber);
    }
  }

  function decreaseNumber() {
    var numberElement = this.parentNode.getElementsByClassName("number")[0];
    var currentValue = parseInt(numberElement.textContent);
    if (currentValue > 0) {
      numberElement.textContent = currentValue - 1;
    }
  }

  function increaseNumber() {
    var numberElement = this.parentNode.getElementsByClassName("number")[0];
    var currentValue = parseInt(numberElement.textContent);
    numberElement.textContent = currentValue + 1;
  }

  attachEventHandlers();
})();
