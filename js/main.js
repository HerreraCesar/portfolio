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
    background.style.backgroundImage = `url('./assets/images/background${random(
      6
    )}.gif')`;
  } else {
    document.getElementById("fullscreenIcon").src =
      "./assets/icons/fullscreen_exit.svg";
    background.style.backgroundImage = `url('./assets/images/background${random(
      6
    )}.gif')`;
    getFullscreen(document.documentElement);
  }
});

const welcome = document.querySelector("#welcome");
const comenzar = document.querySelector("#comenzar");
const span = document.querySelector("#span");
const url = document.querySelector("#url");
const text = document.querySelector("#text");
const about = document.querySelector("#about");
const data = document.querySelector("#data");
const curtain = document.querySelector("#curtain");

comenzar.addEventListener("click", function () {
  window.scroll(0, 0);
  welcome.className = "section active";
  let originalText = 'https://herreracesar.dev'
  let characterArray = originalText.split("");
  let cont = 0;
  let write = setInterval(() => {
    welcome.style.display = "none";
    text.innerHTML += characterArray[cont];
    cont++;
    if (cont === characterArray.length) {
      clearInterval(write);
    }
  }, 150);

  let progress = 0;

  window.addEventListener("wheel", (e) => {
    let base = "https://herreracesar.dev";

    if (progress === 0 && e.deltaY < 0) {
      return;
    } else {
      progress += e.deltaY;
    }
    console.log(progress);
    if (progress < 1375) {
      text.style.top = `calc(50vh - 50px - ${progress / 5}px)`;
      text.style.fontSize = `calc(5vw - ${progress / 50}px)`;
      text.innerHTML = base;
    }
    if (progress >= 1375) {
      text.innerHTML = base + "/";
    }
    if (progress >= 1500) {
      text.innerHTML = base + "/a";
    }
    if (progress >= 1625) {
      text.innerHTML = base + "/ab";
    }
    if (progress >= 1750) {
      text.innerHTML = base + "/abo";
    }
    if (progress >= 1875) {
      text.innerHTML = base + "/abou";
    }
    if (progress >= 2000) {
      text.innerHTML = base + "/about";
      about.style.opacity = 0;
    }
    if (progress >= 2125) {
      about.innerHTML = `
        <div id="data">
          <h1 id='name'>César</h1>
          <p>25-year-old <strong>Full Stack Developer</strong> student, technology lover. Among my interests are cinema, photography, statistics, music, cryptocurrencies, architecture and of course computer science. I am usually very <strong>curious, orderly and detailed</strong>. My studies taught me to <strong>work in a team</strong> and seek constant improvement and <strong>efficiency</strong>.Interested in progressing within the workplace to develop personally and <strong>continue growing.</strong></p>
          <a href="./assets/pdfs/CV_Herrera_English.pdf" target="_blank">_Resume <img src="./assets/icons/open.svg" alt=""></a>
        </div>
        <img id="profile" src="./assets/images/profile.jpg" alt="">
      `;
      about.style.opacity = 1;
      document.querySelector('#profile').style.width = `${(progress-2000)/30}%`
    }
    if (progress >= 2250) {
      document.querySelector('#name').style.transform = `translateY(${(progress-2250)/-6}px)`
    }
    if (progress >= 4000) {
      document.querySelector('#data p').style.transition = 'all 2s'
      document.querySelector('#data p').style.opacity = 1
      document.querySelector('#name').style.transform = `translateY(-275px)`
    }
    if (progress >= 4250) {
      document.querySelector('#profile').style.width = `${88 - (progress - 4250)/30}%`
    }
    if (progress >= 6875) {
      document.querySelector('#profile').style.opacity = 0
      curtain.style.top = `calc(50vh - (${(progress-6750)/30}vw)/2)`
      curtain.style.width = `${(progress-6750)/30}vw`
      curtain.style.height = `${(progress-6750)/30}vw`
    }
    if (progress >= 10000) {
      about.innerHTML=''
      curtain.style.width = 0
      curtain.style.height = 0
    }
    if (progress >= 10125) {
      text.innerHTML = base + "/abou";
    }
    if (progress >= 10250) {
      text.innerHTML = base + "/abo";
    }
    if (progress >= 10375) {
      text.innerHTML = base + "/ab";
    }
    if (progress >= 10500) {
      text.innerHTML = base + "/a";
    }
    if (progress >= 10625) {
      text.innerHTML = base + "/";
    }
    if (progress >= 10750) {
      text.innerHTML = base + "/s";
    }
    if (progress >= 10875) {
      text.innerHTML = base + "/sk";
    }
    if (progress >= 11000) {
      text.innerHTML = base + "/ski";
    }
    if (progress >= 11125) {
      text.innerHTML = base + "/skil";
    }
    if (progress >= 11250) {
      text.innerHTML = base + "/skill";
    }
    if (progress >= 11375) {
      text.innerHTML = base + "/skills";
    }
  });
});
