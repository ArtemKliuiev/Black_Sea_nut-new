(function() {
  const button = document.querySelector('.top-video__button');
  const videos = document.querySelectorAll('.top-video');
  
  button.addEventListener('click', function() {
    videos.forEach(function(video) {
      video.classList.add('ready');
    });
  });
})();

(function() {
  const delVideos = document.querySelectorAll('.delivery-video');

  delVideos.forEach(function(video) {
    video.addEventListener('click', function() {
      video.classList.add('ready');
    });
  });
})();

