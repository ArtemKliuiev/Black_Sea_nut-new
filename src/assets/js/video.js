(function() {
    const videoElements = document.querySelectorAll('.video');
  
    videoElements.forEach(function(videoElement) {
      videoElement.addEventListener('click', function() {
        this.classList.add('ready');
      });
    });
  })();