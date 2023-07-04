(function() {
    const content = document.querySelector('.main')
    function logEverySecond() {
      content.classList.remove('preload')
  }
  
  setTimeout(logEverySecond, 700);
  
  })();