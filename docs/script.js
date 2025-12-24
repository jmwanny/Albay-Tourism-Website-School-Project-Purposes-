window.addEventListener("load", () => {
  AOS.init({
    once: false,          
    duration: 1000,     
    easing: "ease-in-out"
  });

  AOS.refresh();
});


const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.innerHTML = `
      <i class="fas fa-play"></i>
      <span class="music-text">Play Albay Hymn</span>
    `;
  } else {
    audio.play();
    playBtn.innerHTML = `
      <i class="fas fa-pause"></i>
      <span class="music-text">Albay Hymn Playing</span>
    `;
  }
  isPlaying = !isPlaying;
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".my-header");
  
  if(window.scrollY>=600){
     header.style.backgroundColor = "rgba(255, 234, 255, 0.01)";
     header.style.backdropFilter = "blur(7px)";
     header.style.willChange = "backdrop-filter"
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
  }
})