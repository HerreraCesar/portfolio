function random(max) {
  return Math.floor(Math.random() * max + 1);
}

const background = document.getElementById("background");
background.style.backgroundImage = `url('./assets/images/background${random(
  6
)}.gif')`;

const fullscreenButton = document.getElementById("fullscreen");

let fullscreen = false;

function getFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

fullscreenButton.addEventListener("click", function () {
  if (document.fullscreenElement) {
    document.getElementById("fullscreenIcon").src =
      "./assets/icons/fullscreen.svg";

    exitFullscreen();
  } else {
    document.getElementById("fullscreenIcon").src =
      "./assets/icons/fullscreen_exit.svg";
    getFullscreen(document.documentElement);
  }
});

const welcome = document.getElementById("welcome");
const comenzar = document.getElementById("comenzar");
const span = document.getElementById("span");
comenzar.addEventListener('click', function() {
    welcome.className = 'section active'
    setTimeout(() => {
        welcome.style.display ='none';
        span.style.animation = 'escribiendo 3s steps(25, start), parpadeo 1s step-end infinite'
        span.style.width = '0'
    }, 1000);
})