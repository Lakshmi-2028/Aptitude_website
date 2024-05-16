function changeVideo(videoSrc, posterSrc, title) {
    var mainVideo = document.getElementById('main-video');
    mainVideo.src = videoSrc;
    mainVideo.poster = posterSrc;
    mainVideo.setAttribute('controls', true);
    mainVideo.play();
    document.getElementById('main-video-title').innerText = title;
  }
  