// FUNCIONES
function random(max) {
  return Math.floor(Math.random() * max + 1);
}

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

function copyToClipboard() {
  navigator.clipboard.writeText('herrera.cesar.arg@gmail.com')
}

// ADAPTACIÓN DEL VIDEO A LA VENTANA
document.querySelector("#background video").src = `./assets/videos/1.mp4`;
let width = window.innerWidth;
let height = window.innerHeight;
document.querySelector("#background video").style.transform = `scaleY(${
  1 / (width / 1.8 / height)
})`;

// LISTAS
const fonts = [
  "Roboto Mono",
  "Montserrat",
  "Gochi Hand",
  "Josefin Sans",
  "Lobster",
  "Oswald",
  "Permanent Marker",
  "Playfair Display",
  "Ubuntu",
  "VT323",
];

// FULLSCREEN
const fullscreenButton = document.querySelector("#fullscreenIcon");
let fullscreen = false;
fullscreenButton.addEventListener("click", function () {
  if (document.fullscreenElement) {
    fullscreenButton.src = "./assets/icons/fullscreen.svg";
    exitFullscreen();
  } else {
    fullscreenButton.src = "./assets/icons/fullscreen_exit.svg";
    getFullscreen(document.documentElement);
    document.querySelector("#background video").style.transform = `scaleY(${
      1 / (width / 2.1 / height)
    })`;
  }
});

// OBTENCIÓN ELEMENTOS
const comenzar = document.querySelector("#comenzar");
const start = document.querySelector("#start");
const progressBar = document.querySelector("#progress")
const instruction = document.querySelector("#instruction");
const welcome = document.querySelector("#welcome");
const span = document.querySelector("#span");
const url = document.querySelector("#url");
const text = document.querySelector("#text");
const about = document.querySelector("#about");
const data = document.querySelector("#data");
const curtain = document.querySelector("#curtain");
const skills = document.querySelector("#skills");
const technologies = document.querySelector("#technologies");
const back = document.querySelector("#back");
const experiences = document.querySelector("#experiences");
const contact = document.querySelector("#contact");
const form = document.querySelector("#form");

// FLUJO PÁGINA

start.addEventListener("click", () => {


  // ANIMACIÓN URL
  window.scroll(0, 0);
  instruction.style.display = "none";
  welcome.className = "section inactive";
  let originalText = "https://herreracesar.site";
  let characterArray = originalText.split("");
  let cont = 0;
  setTimeout(() => {
    welcome.style.display = "none";
    let write = setInterval(() => {
      text.innerHTML += characterArray[cont];
      cont++;
      if (cont === characterArray.length) {
        clearInterval(write);
      }
    }, 150);
  }, 1100);

  setTimeout(() => {
    instruction.innerHTML = "<p>scroll to continue</p>";
    instruction.style.display = "flex";
    // AVANCE SCROLL
    let progress = 1;
    let ratio = screen.width / screen.height
    let event = new Event("wheel");
    let lastY;
    let currentY;
    window.addEventListener("touchmove", (e) => {
      currentY = e.touches[0].clientY;
      window.dispatchEvent(event);
      lastY = currentY;
    });

    window.addEventListener("wheel", (e) => {
      console.log(progress);
      let base = "https://herreracesar.site";
      if (e.deltaY) {
        if (progress === 1 && e.deltaY < 0) {
          return;
        } else if (progress >= 429){
          progress = progress-1
        } else {
          progress += e.deltaY / 125;
        }
      } else {
        if (progress > 0 || progress === 0) {
          if (currentY > lastY && progress > 0) {
            --progress;
          } else if (currentY < lastY) {
            ++progress;
          }
        } 
      }
      progressBar.style.width = `${progress * 100 / 427}%`
      if (ratio < 1.25) {
        if (progress < 10) {
          text.style.top = `calc(50vh - 0.75rem - ${progress / 0.35}rem)`;
          //text.style.fontSize = `calc(2rem - ${progress / 2}rem)`;
          text.innerHTML = base;
          contact.style.display = 'none'
        }
        if (progress >= 11) {
          contact.style.display = 'none'
          text.innerHTML = base + "/";
        }
        if (progress >= 12) {
          text.innerHTML = base + "/a";
        }
        if (progress >= 13) {
          text.innerHTML = base + "/ab";
        }
        if (progress >= 14) {
          text.innerHTML = base + "/abo";
        }
        if (progress >= 15) {
          text.innerHTML = base + "/abou";
        }
        if (progress >= 16) {
          text.innerHTML = base + "/about";
          about.style.opacity = 0;
        }
        if (progress >= 17) {
          about.innerHTML = `
            <div id="data">
              <h1 id='name'>César</h1>
              <p><strong>Full Stack Developer</strong> who loves technology. Among my interests are cinema, photography, statistics, architecture and computer science. I am a very <strong>curious person, orderly and detailed</strong>. My studies taught me to <strong>work as a team</strong> and seek constant improvement. Currently I am focused on progressing within the workplace to develop personally and <strong>continue growing</strong>.</p>
              <a href="./assets/pdfs/CV_Herrera_Cesar_English.pdf" target="_blank">_Resume <img src="./assets/icons/open.svg" alt=""></a>
            </div>
            <img id="profile" src="./assets/images/profile.jpg" alt="profile picture">
          `;
          about.style.opacity = 1;
        }
        if (progress >= 18) {
          /* document.querySelector("#profile").style.width = `${
            (progress - 18) * 2
          }%`; */
          document.querySelector("#name").style.transform = `translateY(${
            (progress - 18 - 5) * -1
          }rem)`;
          document.querySelector("#data p").style.opacity = 0;
        }
        if (progress >= 40) {
          document.querySelector("#data p").style.opacity = 1;
          document.querySelector("#name").style.transform = `translateY(-16rem)`;
          document.querySelector("#name").style.cursor = "pointer";
          document.querySelector("#name").addEventListener("click", () => {
            document.querySelector("#name").style.fontFamily =
              fonts[random(fonts.length)];
          });
          //document.querySelector("#profile").style.width = `33%`;
        }
        if (progress >= 42) {
          //document.querySelector("#profile").style.opacity = 1;
          /* document.querySelector("#profile").style.width = `${
            33 - (progress - 42)
          }%`; */
          document.querySelector("#name").style.fontFamily =
            fonts[random(fonts.length)];
          curtain.style.width = 0;
          curtain.style.height = 0;
          //curtain.style.top = 0;
        }
        if (progress >= 75) {
          document.querySelector("#name").style.fontFamily = "Roboto Mono";
          //document.querySelector("#profile").style.opacity = 0;
          //document.querySelector("#profile").style.width = 0;
          //curtain.style.top = `calc(50vh - (${(progress - 75) * 2}vw)/2)`;
          curtain.style.left = `calc(50vw - ${(progress - 75)}vh)`;
          curtain.style.top = `calc(50vh - ${(progress - 75)}vh)`;
          curtain.style.width = `${(progress - 75) * 2}vh`;
          curtain.style.height = `${(progress - 75) * 2}vh`;
          //curtain.style.boxShadow = `-${(progress - 75) / 6}vw 0px 30px black`;
        }
        if (progress >= 127) {
          about.innerHTML = "";
          curtain.style.width = 0;
          curtain.style.height = 0;
          //curtain.style.top = 0;
          //curtain.style.boxShadow = "none";
        }
        if (progress >= 130) {
          text.innerHTML = base + "/abou";
        }
        if (progress >= 131) {
          text.innerHTML = base + "/abo";
        }
        if (progress >= 132) {
          text.innerHTML = base + "/ab";
        }
        if (progress >= 133) {
          text.innerHTML = base + "/a";
        }
        if (progress >= 134) {
          text.innerHTML = base + "/";
        }
        if (progress >= 135) {
          text.innerHTML = base + "/s";
        }
        if (progress >= 136) {
          text.innerHTML = base + "/sk";
        }
        if (progress >= 137) {
          text.innerHTML = base + "/ski";
        }
        if (progress >= 138) {
          text.innerHTML = base + "/skil";
        }
        if (progress >= 139) {
          text.innerHTML = base + "/skill";
        }
        if (progress >= 140) {
          text.innerHTML = base + "/skills";
          skills.style.display = "none";
          technologies.innerHTML = "";
        }
        if (progress >= 141) {
          skills.style.display = "flex";
          back.innerHTML = `
              <h3>_HTML5</h3>
              <h3>_CSS3</h3>
              <h3>_SASS</h3>
              <h3>_JavaScript</h3>
              <h3>_MongoDB</h3>
              <h3>_Express JS</h3>
              <h3>_React Js</h3>
              <h3>_Node Js</h3>
              <h3>_Firebase</h3>
              <h3>_Git</h3>
              <h3>_GitHub</h3>
              <h3>_Photoshop</h3>
          `;
          technologies.innerHTML = `
          <div>
            <a href='https://developer.mozilla.org/es/docs/Web/HTML' target='_blank'><h3>_HTML5</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
          </div>
          <div>
            <a href='https://developer.mozilla.org/es/docs/Web/CSS' target='_blank'><h3>_CSS3</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
          </div>
          <div>
          <a href='https://sass-lang.com/' target='_blank'><h3>_SASS</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>
          </div>
          <div>
          <a href='https://developer.mozilla.org/es/docs/Web/JavaScript' target='_blank'><h3>_JavaScript</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
          </div>
          <div>
          <a href='https://www.mongodb.com/es' target='_blank'><h3>_MongoDB</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#fffb95"/><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#ede98a"/><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#d9d580"/></svg>
          </div>
          <div>
          <a href='https://expressjs.com/es/' target='_blank'><h3>_Express JS</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
          </div>
          <div>
          <a href='https://es.reactjs.org/' target='_blank'><h3>_React Js</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
          </div>
          <div>
          <a href='https://nodejs.org/es/' target='_blank'><h3>_Node Js</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
          </div>
          <div>
          <a href='https://firebase.google.com/' target='_blank'><h3>_Firebase</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 32 32" width="64"><path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#fffb95"/><path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#ede98a"/><path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#d9d580"/><path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#c4c174"/></svg>
          </div>
          <div>
          <a href='https://git-scm.com/' target='_blank'><h3>_Git</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg>
          </div>
          <div>
          <a href='https://github.com/' target='_blank'><h3>_GitHub</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </div>
          <div>
          <a href='https://www.adobe.com/ar/products/photoshop.html' target='_blank'><h3>_Photoshop</h3></a>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 240 234" style="enable-background:new 0 0 240 234;" xml:space="preserve">
              <style type="text/css">
                .st0{fill: #fffb95;}
                .st1{fill: #222222;}
              </style>
              <g id="Layer_2_1_">
                <g id="Surfaces">
                  <g id="Photo_Surface">
                    <g id="Outline_no_shadow">
                      <path class="st0" d="M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149
                        C0,19,19,0,42.5,0z"/>
                    </g>
                  </g>
                </g>
                <g id="Outlined_Mnemonics_Logos">
                  <g id="Ps">
                    <path class="st1" d="M54,164.1V61.2c0-0.7,0.3-1.1,1-1.1c1.7,0,3.3,0,5.6-0.1c2.4-0.1,4.9-0.1,7.6-0.2c2.7-0.1,5.6-0.1,8.7-0.2
                      c3.1-0.1,6.1-0.1,9.1-0.1c8.2,0,15,1,20.6,3.1c5,1.7,9.6,4.5,13.4,8.2c3.2,3.2,5.7,7.1,7.3,11.4c1.5,4.2,2.3,8.5,2.3,13
                      c0,8.6-2,15.7-6,21.3c-4,5.6-9.6,9.8-16.1,12.2c-6.8,2.5-14.3,3.4-22.5,3.4c-2.4,0-4,0-5-0.1c-1-0.1-2.4-0.1-4.3-0.1v32.1
                      c0.1,0.7-0.4,1.3-1.1,1.4c-0.1,0-0.2,0-0.4,0H55.2C54.4,165.4,54,165,54,164.1z M75.8,79.4V113c1.4,0.1,2.7,0.2,3.9,0.2H85
                      c3.9,0,7.8-0.6,11.5-1.8c3.2-0.9,6-2.8,8.2-5.3c2.1-2.5,3.1-5.9,3.1-10.3c0.1-3.1-0.7-6.2-2.3-8.9c-1.7-2.6-4.1-4.6-7-5.7
                      c-3.7-1.5-7.7-2.1-11.8-2c-2.6,0-4.9,0-6.8,0.1C77.9,79.2,76.5,79.3,75.8,79.4L75.8,79.4z"/>
                    <path class="st1" d="M192,106.9c-3-1.6-6.2-2.7-9.6-3.4c-3.7-0.8-7.4-1.3-11.2-1.3c-2-0.1-4.1,0.2-6,0.7c-1.3,0.3-2.4,1-3.1,2
                      c-0.5,0.8-0.8,1.8-0.8,2.7c0,0.9,0.4,1.8,1,2.6c0.9,1.1,2.1,2,3.4,2.7c2.3,1.2,4.7,2.3,7.1,3.3c5.4,1.8,10.6,4.3,15.4,7.3
                      c3.3,2.1,6,4.9,7.9,8.3c1.6,3.2,2.4,6.7,2.3,10.3c0.1,4.7-1.3,9.4-3.9,13.3c-2.8,4-6.7,7.1-11.2,8.9c-4.9,2.1-10.9,3.2-18.1,3.2
                      c-4.6,0-9.1-0.4-13.6-1.3c-3.5-0.6-7-1.7-10.2-3.2c-0.7-0.4-1.2-1.1-1.1-1.9v-17.4c0-0.3,0.1-0.7,0.4-0.9
                      c0.3-0.2,0.6-0.1,0.9,0.1c3.9,2.3,8,3.9,12.4,4.9c3.8,1,7.8,1.5,11.8,1.5c3.8,0,6.5-0.5,8.3-1.4c1.6-0.7,2.7-2.4,2.7-4.2
                      c0-1.4-0.8-2.7-2.4-4c-1.6-1.3-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2c-3.1-2.2-5.7-5.1-7.6-8.5c-1.6-3.2-2.4-6.7-2.3-10.2
                      c0-4.3,1.2-8.4,3.4-12.1c2.5-4,6.2-7.2,10.5-9.2c4.7-2.4,10.6-3.5,17.7-3.5c4.1,0,8.3,0.3,12.4,0.9c3,0.4,5.9,1.2,8.6,2.3
                      c0.4,0.1,0.8,0.5,1,0.9c0.1,0.4,0.2,0.8,0.2,1.2v16.3c0,0.4-0.2,0.8-0.5,1C192.9,107.1,192.4,107.1,192,106.9z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          `;
        }
        if (progress >= 142) {
          technologies.style.transform = `translateY(${
            100 + (progress - 142) * -6
          }vh)`;
          back.style.transform = `translateY(${65 + (progress - 142) * -4}vh)`;
        }
        if (progress >= 274) {
          technologies.style.transform = `translateY(-697vh)`;
          back.style.transform = `translateY(-463vh)`;
        }
        if (progress >= 275) {
          text.innerHTML = base + "/skill";
        }
        if (progress >= 276) {
          text.innerHTML = base + "/skil";
        }
        if (progress >= 277) {
          text.innerHTML = base + "/ski";
        }
        if (progress >= 278) {
          text.innerHTML = base + "/sk";
        }
        if (progress >= 279) {
          text.innerHTML = base + "/s";
        }
        if (progress >= 280) {
          text.innerHTML = base + "/";
        }
        if (progress >= 281) {
          text.innerHTML = base + "/e";
        }
        if (progress >= 282) {
          text.innerHTML = base + "/ex";
        }
        if (progress >= 283) {
          text.innerHTML = base + "/exp";
        }
        if (progress >= 284) {
          text.innerHTML = base + "/expe";
        }
        if (progress >= 285) {
          text.innerHTML = base + "/exper";
        }
        if (progress >= 286) {
          text.innerHTML = base + "/experi";
        }
        if (progress >= 287) {
          text.innerHTML = base + "/experie";
        }
        if (progress >= 288) {
          text.innerHTML = base + "/experien";
        }
        if (progress >= 289) {
          text.innerHTML = base + "/experienc";
        }
        if (progress >= 290) {
          text.innerHTML = base + "/experience";
        }
        if (progress >= 291) {
          text.innerHTML = base + "/experiences";
        }
        if (progress >= 292) {
          experiences.style.zIndex = 1;
          experiences.innerHTML = `
            <div class='project'>
              <div  class='screenshot'>
                <img src="./assets/images/stail.jpg" alt="stail">
                <div class='links'>
                  <div>
                    <h3>Stail Iluminación</h3>
                    <p>Website made during the development of the Coderhouse Web Development course.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/lighting-store' target='_blank'>_Repository </a>
                    <a href='https://stail.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Stail Iluminación</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
              </div>
            </div>
            <div class='project'>
              <div  class='screenshot'>
                <img src="./assets/images/sergalgos.jpg" alt="sergalgos">
                <div class='links'>
                  <div>
                    <h3>Ser Galgos</h3>
                    <p>Realization of website with HTML, CSS and JavaScript Vanilla for Ser Galgos.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/ser-galgos' target='_blank'>_Repository </a>
                    <a href='https://sergalgos.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Ser Galgos</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='css3'>
                  <img src="./assets/icons/css3.svg" alt="css3">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='js'>
                  <img src="./assets/icons/js.svg" alt="js">
                </div>
              </div>
            </div>
            <div class='project'>
              <div class='screenshot'>
                <img src="./assets/images/1000movies.jpg" alt="1000movies">
                <div class='links'>
                  <div>
                    <h3>1000 Movies</h3>
                    <p>Website made during the development of the Coderhouse JavaScript course.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/movies-website' target='_blank'>_Repository </a>
                    <a href='https://milpelis.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>1000 Movies</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='js'>
                  <img src="./assets/icons/js.svg" alt="js">
                </div>
              </div>
            </div>
            <div class='project'>
              <div class='screenshot'>
                <img src="./assets/images/pcentrix.jpg" alt="pcentrix">
                <div class='links'>
                  <div>
                    <h3>Pcentrix</h3>
                    <p>Realization of landing page with HTML, SASS and JavaScript Vanilla for Pcentrix.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/pcentrix' target='_blank'>_Repository </a>
                    <a href='https://pcentrix.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Pcentrix</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='js'>
                  <img src="./assets/icons/js.svg" alt="js">
                </div>
              </div>
            </div>
            <div class='project'>
              <div  class='screenshot'>
                <img src="./assets/images/basicstore.jpg" alt="basicstore">
                <div class='links'>
                  <div>
                    <h3>Basics Store</h3>
                    <p>E-commerce made during the development of the Coderhouse React JS course.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/basics-store' target='_blank'>_Repository </a>
                    <a href='https://basics-store.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Basics Store</h3>
              <div class='icons'>
                <div class='react'>
                  <img src="./assets/icons/react.svg" alt="react">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='firebase'>
                  <img src="./assets/icons/firebase.svg" alt="firebase">
                </div>
                <div class='photoshop'>
                  <img src="./assets/icons/photoshop.svg" alt="photoshop">
                </div>
              </div>
            </div>
          `;
        }
        if (progress >= 293) {
          experiences.style.transform = `translateX(${
            -220 + (progress - 293) * 5
          }rem)`;
        }
        if (progress >= 368) {
          experiences.style.transform = `translateX(155rem)`;
        }
        if (progress >= 369) {
          text.innerHTML = base + "/experience";
        }
        if (progress >= 370) {
          text.innerHTML = base + "/experienc";
        }
        if (progress >= 371) {
          text.innerHTML = base + "/experien";
        }
        if (progress >= 372) {
          text.innerHTML = base + "/experie";
        }
        if (progress >= 373) {
          text.innerHTML = base + "/experi";
        }
        if (progress >= 374) {
          text.innerHTML = base + "/exper";
        }
        if (progress >= 375) {
          text.innerHTML = base + "/expe";
        }
        if (progress >= 376) {
          text.innerHTML = base + "/exp";
        }
        if (progress >= 377) {
          text.innerHTML = base + "/ex";
        }
        if (progress >= 378) {
          text.innerHTML = base + "/e";
        }
        if (progress >= 379) {
          text.innerHTML = base + "/";
        }
        if (progress >= 380) {
          text.innerHTML = base + "/c";
        }
        if (progress >= 381) {
          text.innerHTML = base + "/co";
        }
        if (progress >= 382) {
          text.innerHTML = base + "/con";
        }
        if (progress >= 383) {
          text.innerHTML = base + "/cont";
        }
        if (progress >= 384) {
          text.innerHTML = base + "/conta";
        }
        if (progress >= 385) {
          text.innerHTML = base + "/contac";
        }
        if (progress >= 386) {
          text.innerHTML = base + "/contact";
        }
        if (progress >= 387) {
          form.innerHTML = `<h2>Let's talk!</h2>
          <h1 onclick="copyToClipboard()">
            herrera.cesar.arg@gmail.com
            <img src="./assets/icons/clone.svg" alt="" />
          </h1>
          <div class="linkedin">
            <a
              href="https://www.linkedin.com/in/herrera-cesar/"
              target="_blank"
              ><img src="./assets/icons/linkedin.svg" alt="linkedin"
            /></a>
          </div>
          <div class="github">
            <a href="https://github.com/HerreraCesar" target="_blank"
              ><img src="./assets/icons/github.svg" alt="github"
            /></a>
          </div>`;
          contact.style.display = 'flex'
        }
        if (progress >= 388) {
          form.style.transform = `scale(${
            81 - (progress - 388) * 2
          }) translateX(0px) translateY(-5px)`;
          instruction.innerHTML = "<p>scroll to continue</p>";
          instruction.style.animation = 'flash 2s infinite'
        }
        if (progress >= 428) {
          form.style.transform = `scale(1) translateX(0px) translateY(-5px)`;
          instruction.innerHTML = "<p>thanks for watching</p>";
          instruction.style.animation = 'none'
        }
      } else {
        if (progress < 10) {
          text.style.top = `calc(50vh - 7rem - ${progress / 0.35}rem)`;
          text.style.fontSize = `calc(7rem - ${progress / 2}rem)`;
          text.innerHTML = base;
          contact.style.display = 'none'
        }
        if (progress >= 11) {
          contact.style.display = 'none'
          text.innerHTML = base + "/";
        }
        if (progress >= 12) {
          text.innerHTML = base + "/a";
        }
        if (progress >= 13) {
          text.innerHTML = base + "/ab";
        }
        if (progress >= 14) {
          text.innerHTML = base + "/abo";
        }
        if (progress >= 15) {
          text.innerHTML = base + "/abou";
        }
        if (progress >= 16) {
          text.innerHTML = base + "/about";
          about.style.opacity = 0;
        }
        if (progress >= 17) {
          about.innerHTML = `
            <div id="data">
              <h1 id='name'>César</h1>
              <p><strong>Full Stack Developer</strong> who loves technology. Among my interests are cinema, photography, statistics, architecture and computer science. I am a very <strong>curious person, orderly and detailed</strong>. My studies taught me to <strong>work as a team</strong> and seek constant improvement. Currently I am focused on progressing within the workplace to develop personally and <strong>continue growing</strong>.</p>
              <a href="./assets/pdfs/CV_Herrera_Cesar_English.pdf" target="_blank">_Resume <img src="./assets/icons/open.svg" alt=""></a>
            </div>
            <img id="profile" src="./assets/images/profile.jpg" alt="profile picture">
          `;
          about.style.opacity = 1;
        }
        if (progress >= 18) {
          document.querySelector("#profile").style.width = `${
            (progress - 18) * 1.5
          }%`;
          document.querySelector("#name").style.transform = `translateY(${
            (progress - 18 - 5) * -1
          }rem)`;
          document.querySelector("#data p").style.opacity = 0;
        }
        if (progress >= 40) {
          document.querySelector("#data p").style.opacity = 1;
          document.querySelector("#name").style.transform = `translateY(-16rem)`;
          document.querySelector("#name").style.cursor = "pointer";
          document.querySelector("#name").addEventListener("click", () => {
            document.querySelector("#name").style.fontFamily =
              fonts[random(fonts.length)];
          });
          document.querySelector("#profile").style.width = `33%`;
        }
        if (progress >= 42) {
          document.querySelector("#profile").style.opacity = 1;
          document.querySelector("#profile").style.width = `${
            33 - (progress - 42)
          }%`;
          document.querySelector("#name").style.fontFamily =
            fonts[random(fonts.length)];
          curtain.style.width = 0;
          curtain.style.height = 0;
          curtain.style.top = 0;
        }
        if (progress >= 75) {
          document.querySelector("#name").style.fontFamily = "Roboto Mono";
          document.querySelector("#profile").style.opacity = 0;
          document.querySelector("#profile").style.width = 0;
          curtain.style.top = `calc(50vh - (${(progress - 75) * 2}vw)/2)`;
          curtain.style.width = `${(progress - 75) * 2}vw`;
          curtain.style.height = `${(progress - 75) * 2}vw`;
          curtain.style.boxShadow = `-${(progress - 75) / 6}vw 0px 30px black`;
        }
        if (progress >= 127) {
          about.innerHTML = "";
          curtain.style.width = 0;
          curtain.style.height = 0;
          curtain.style.top = 0;
          curtain.style.boxShadow = "none";
        }
        if (progress >= 130) {
          text.innerHTML = base + "/abou";
        }
        if (progress >= 131) {
          text.innerHTML = base + "/abo";
        }
        if (progress >= 132) {
          text.innerHTML = base + "/ab";
        }
        if (progress >= 133) {
          text.innerHTML = base + "/a";
        }
        if (progress >= 134) {
          text.innerHTML = base + "/";
        }
        if (progress >= 135) {
          text.innerHTML = base + "/s";
        }
        if (progress >= 136) {
          text.innerHTML = base + "/sk";
        }
        if (progress >= 137) {
          text.innerHTML = base + "/ski";
        }
        if (progress >= 138) {
          text.innerHTML = base + "/skil";
        }
        if (progress >= 139) {
          text.innerHTML = base + "/skill";
        }
        if (progress >= 140) {
          text.innerHTML = base + "/skills";
          skills.style.display = "none";
          technologies.innerHTML = "";
        }
        if (progress >= 141) {
          skills.style.display = "flex";
          back.innerHTML = `
              <h3>_HTML5</h3>
              <h3>_CSS3</h3>
              <h3>_SASS</h3>
              <h3>_JavaScript</h3>
              <h3>_MongoDB</h3>
              <h3>_Express JS</h3>
              <h3>_React Js</h3>
              <h3>_Node Js</h3>
              <h3>_Firebase</h3>
              <h3>_Git</h3>
              <h3>_GitHub</h3>
              <h3>_Photoshop</h3>
          `;
          technologies.innerHTML = `
          <div>
            <a href='https://developer.mozilla.org/es/docs/Web/HTML' target='_blank'><h3>_HTML5</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
          </div>
          <div>
            <a href='https://developer.mozilla.org/es/docs/Web/CSS' target='_blank'><h3>_CSS3</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
          </div>
          <div>
          <a href='https://sass-lang.com/' target='_blank'><h3>_SASS</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>
          </div>
          <div>
          <a href='https://developer.mozilla.org/es/docs/Web/JavaScript' target='_blank'><h3>_JavaScript</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
          </div>
          <div>
          <a href='https://www.mongodb.com/es' target='_blank'><h3>_MongoDB</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#fffb95"/><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#ede98a"/><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#d9d580"/></svg>
          </div>
          <div>
          <a href='https://expressjs.com/es/' target='_blank'><h3>_Express JS</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
          </div>
          <div>
          <a href='https://es.reactjs.org/' target='_blank'><h3>_React Js</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
          </div>
          <div>
          <a href='https://nodejs.org/es/' target='_blank'><h3>_Node Js</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
          </div>
          <div>
          <a href='https://firebase.google.com/' target='_blank'><h3>_Firebase</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 32 32" width="64"><path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#fffb95"/><path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#ede98a"/><path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#d9d580"/><path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#c4c174"/></svg>
          </div>
          <div>
          <a href='https://git-scm.com/' target='_blank'><h3>_Git</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg>
          </div>
          <div>
          <a href='https://github.com/' target='_blank'><h3>_GitHub</h3></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </div>
          <div>
          <a href='https://www.adobe.com/ar/products/photoshop.html' target='_blank'><h3>_Photoshop</h3></a>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 240 234" style="enable-background:new 0 0 240 234;" xml:space="preserve">
              <style type="text/css">
                .st0{fill: #fffb95;}
                .st1{fill: #222222;}
              </style>
              <g id="Layer_2_1_">
                <g id="Surfaces">
                  <g id="Photo_Surface">
                    <g id="Outline_no_shadow">
                      <path class="st0" d="M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149
                        C0,19,19,0,42.5,0z"/>
                    </g>
                  </g>
                </g>
                <g id="Outlined_Mnemonics_Logos">
                  <g id="Ps">
                    <path class="st1" d="M54,164.1V61.2c0-0.7,0.3-1.1,1-1.1c1.7,0,3.3,0,5.6-0.1c2.4-0.1,4.9-0.1,7.6-0.2c2.7-0.1,5.6-0.1,8.7-0.2
                      c3.1-0.1,6.1-0.1,9.1-0.1c8.2,0,15,1,20.6,3.1c5,1.7,9.6,4.5,13.4,8.2c3.2,3.2,5.7,7.1,7.3,11.4c1.5,4.2,2.3,8.5,2.3,13
                      c0,8.6-2,15.7-6,21.3c-4,5.6-9.6,9.8-16.1,12.2c-6.8,2.5-14.3,3.4-22.5,3.4c-2.4,0-4,0-5-0.1c-1-0.1-2.4-0.1-4.3-0.1v32.1
                      c0.1,0.7-0.4,1.3-1.1,1.4c-0.1,0-0.2,0-0.4,0H55.2C54.4,165.4,54,165,54,164.1z M75.8,79.4V113c1.4,0.1,2.7,0.2,3.9,0.2H85
                      c3.9,0,7.8-0.6,11.5-1.8c3.2-0.9,6-2.8,8.2-5.3c2.1-2.5,3.1-5.9,3.1-10.3c0.1-3.1-0.7-6.2-2.3-8.9c-1.7-2.6-4.1-4.6-7-5.7
                      c-3.7-1.5-7.7-2.1-11.8-2c-2.6,0-4.9,0-6.8,0.1C77.9,79.2,76.5,79.3,75.8,79.4L75.8,79.4z"/>
                    <path class="st1" d="M192,106.9c-3-1.6-6.2-2.7-9.6-3.4c-3.7-0.8-7.4-1.3-11.2-1.3c-2-0.1-4.1,0.2-6,0.7c-1.3,0.3-2.4,1-3.1,2
                      c-0.5,0.8-0.8,1.8-0.8,2.7c0,0.9,0.4,1.8,1,2.6c0.9,1.1,2.1,2,3.4,2.7c2.3,1.2,4.7,2.3,7.1,3.3c5.4,1.8,10.6,4.3,15.4,7.3
                      c3.3,2.1,6,4.9,7.9,8.3c1.6,3.2,2.4,6.7,2.3,10.3c0.1,4.7-1.3,9.4-3.9,13.3c-2.8,4-6.7,7.1-11.2,8.9c-4.9,2.1-10.9,3.2-18.1,3.2
                      c-4.6,0-9.1-0.4-13.6-1.3c-3.5-0.6-7-1.7-10.2-3.2c-0.7-0.4-1.2-1.1-1.1-1.9v-17.4c0-0.3,0.1-0.7,0.4-0.9
                      c0.3-0.2,0.6-0.1,0.9,0.1c3.9,2.3,8,3.9,12.4,4.9c3.8,1,7.8,1.5,11.8,1.5c3.8,0,6.5-0.5,8.3-1.4c1.6-0.7,2.7-2.4,2.7-4.2
                      c0-1.4-0.8-2.7-2.4-4c-1.6-1.3-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2c-3.1-2.2-5.7-5.1-7.6-8.5c-1.6-3.2-2.4-6.7-2.3-10.2
                      c0-4.3,1.2-8.4,3.4-12.1c2.5-4,6.2-7.2,10.5-9.2c4.7-2.4,10.6-3.5,17.7-3.5c4.1,0,8.3,0.3,12.4,0.9c3,0.4,5.9,1.2,8.6,2.3
                      c0.4,0.1,0.8,0.5,1,0.9c0.1,0.4,0.2,0.8,0.2,1.2v16.3c0,0.4-0.2,0.8-0.5,1C192.9,107.1,192.4,107.1,192,106.9z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          `;
        }
        if (progress >= 142) {
          technologies.style.transform = `translateY(${
            100 + (progress - 142) * -6
          }vh)`;
          back.style.transform = `translateY(${65 + (progress - 142) * -4}vh)`;
        }
        if (progress >= 274) {
          technologies.style.transform = `translateY(-697vh)`;
          back.style.transform = `translateY(-463vh)`;
        }
        if (progress >= 275) {
          text.innerHTML = base + "/skill";
        }
        if (progress >= 276) {
          text.innerHTML = base + "/skil";
        }
        if (progress >= 277) {
          text.innerHTML = base + "/ski";
        }
        if (progress >= 278) {
          text.innerHTML = base + "/sk";
        }
        if (progress >= 279) {
          text.innerHTML = base + "/s";
        }
        if (progress >= 280) {
          text.innerHTML = base + "/";
        }
        if (progress >= 281) {
          text.innerHTML = base + "/e";
        }
        if (progress >= 282) {
          text.innerHTML = base + "/ex";
        }
        if (progress >= 283) {
          text.innerHTML = base + "/exp";
        }
        if (progress >= 284) {
          text.innerHTML = base + "/expe";
        }
        if (progress >= 285) {
          text.innerHTML = base + "/exper";
        }
        if (progress >= 286) {
          text.innerHTML = base + "/experi";
        }
        if (progress >= 287) {
          text.innerHTML = base + "/experie";
        }
        if (progress >= 288) {
          text.innerHTML = base + "/experien";
        }
        if (progress >= 289) {
          text.innerHTML = base + "/experienc";
        }
        if (progress >= 290) {
          text.innerHTML = base + "/experience";
        }
        if (progress >= 291) {
          text.innerHTML = base + "/experiences";
        }
        if (progress >= 292) {
          experiences.style.zIndex = 1;
          experiences.innerHTML = `
            <div class='project'>
              <div  class='screenshot'>
                <img src="./assets/images/stail.jpg" alt="stail">
                <div class='links'>
                  <div>
                    <h3>Stail Iluminación</h3>
                    <p>Website made during the development of the Coderhouse Web Development course.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/lighting-store' target='_blank'>_Repository </a>
                    <a href='https://stail.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Stail Iluminación</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
              </div>
            </div>
            <div class='project'>
              <div  class='screenshot'>
                <img src="./assets/images/sergalgos.jpg" alt="sergalgos">
                <div class='links'>
                  <div>
                    <h3>Ser Galgos</h3>
                    <p>Realization of website with HTML, CSS and JavaScript Vanilla for Ser Galgos.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/ser-galgos' target='_blank'>_Repository </a>
                    <a href='https://sergalgos.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Ser Galgos</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='css3'>
                  <img src="./assets/icons/css3.svg" alt="css3">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='js'>
                  <img src="./assets/icons/js.svg" alt="js">
                </div>
              </div>
            </div>
            <div class='project'>
              <div class='screenshot'>
                <img src="./assets/images/1000movies.jpg" alt="1000movies">
                <div class='links'>
                  <div>
                    <h3>1000 Movies</h3>
                    <p>Website made during the development of the Coderhouse JavaScript course.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/movies-website' target='_blank'>_Repository </a>
                    <a href='https://milpelis.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>1000 Movies</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='js'>
                  <img src="./assets/icons/js.svg" alt="js">
                </div>
              </div>
            </div>
            <div class='project'>
              <div class='screenshot'>
                <img src="./assets/images/pcentrix.jpg" alt="pcentrix">
                <div class='links'>
                  <div>
                    <h3>Pcentrix</h3>
                    <p>Realization of landing page with HTML, SASS and JavaScript Vanilla for Pcentrix.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/pcentrix' target='_blank'>_Repository </a>
                    <a href='https://pcentrix.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Pcentrix</h3>
              <div class='icons'>
                <div class='html'>
                  <img src="./assets/icons/html5.svg" alt="html">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='js'>
                  <img src="./assets/icons/js.svg" alt="js">
                </div>
              </div>
            </div>
            <div class='project'>
              <div  class='screenshot'>
                <img src="./assets/images/basicstore.jpg" alt="basicstore">
                <div class='links'>
                  <div>
                    <h3>Basics Store</h3>
                    <p>E-commerce made during the development of the Coderhouse React JS course.</p>
                  </div>
                  <div>
                    <a href='https://github.com/HerreraCesar/basics-store' target='_blank'>_Repository </a>
                    <a href='https://basics-store.netlify.app/' target='_blank'>_Deploy </a>
                  </div>
                </div>
              </div>
              <h3>Basics Store</h3>
              <div class='icons'>
                <div class='react'>
                  <img src="./assets/icons/react.svg" alt="react">
                </div>
                <div class='sass'>
                  <img src="./assets/icons/sass.svg" alt="sass">
                </div>
                <div class='git'>
                  <img src="./assets/icons/git.svg" alt="git">
                </div>
                <div class='firebase'>
                  <img src="./assets/icons/firebase.svg" alt="firebase">
                </div>
                <div class='photoshop'>
                  <img src="./assets/icons/photoshop.svg" alt="photoshop">
                </div>
              </div>
            </div>
          `;
        }
        if (progress >= 293) {
          experiences.style.transform = `translateX(${
            -220 + (progress - 293) * 5
          }rem)`;
        }
        if (progress >= 368) {
          experiences.style.transform = `translateX(155rem)`;
        }
        if (progress >= 369) {
          text.innerHTML = base + "/experience";
        }
        if (progress >= 370) {
          text.innerHTML = base + "/experienc";
        }
        if (progress >= 371) {
          text.innerHTML = base + "/experien";
        }
        if (progress >= 372) {
          text.innerHTML = base + "/experie";
        }
        if (progress >= 373) {
          text.innerHTML = base + "/experi";
        }
        if (progress >= 374) {
          text.innerHTML = base + "/exper";
        }
        if (progress >= 375) {
          text.innerHTML = base + "/expe";
        }
        if (progress >= 376) {
          text.innerHTML = base + "/exp";
        }
        if (progress >= 377) {
          text.innerHTML = base + "/ex";
        }
        if (progress >= 378) {
          text.innerHTML = base + "/e";
        }
        if (progress >= 379) {
          text.innerHTML = base + "/";
        }
        if (progress >= 380) {
          text.innerHTML = base + "/c";
        }
        if (progress >= 381) {
          text.innerHTML = base + "/co";
        }
        if (progress >= 382) {
          text.innerHTML = base + "/con";
        }
        if (progress >= 383) {
          text.innerHTML = base + "/cont";
        }
        if (progress >= 384) {
          text.innerHTML = base + "/conta";
        }
        if (progress >= 385) {
          text.innerHTML = base + "/contac";
        }
        if (progress >= 386) {
          text.innerHTML = base + "/contact";
        }
        if (progress >= 387) {
          form.innerHTML = `<h2>Let's talk!</h2>
          <h1 onclick="copyToClipboard()">
            herrera.cesar.arg@gmail.com
            <img src="./assets/icons/clone.svg" alt="" />
          </h1>
          <div class="linkedin">
            <a
              href="https://www.linkedin.com/in/herrera-cesar/"
              target="_blank"
              ><img src="./assets/icons/linkedin.svg" alt="linkedin"
            /></a>
          </div>
          <div class="github">
            <a href="https://github.com/HerreraCesar" target="_blank"
              ><img src="./assets/icons/github.svg" alt="github"
            /></a>
          </div>`;
          contact.style.display = 'flex'
        }
        if (progress >= 388) {
          form.style.transform = `scale(${
            81 - (progress - 388) * 2
          }) translateX(-67px) translateY(-5px)`;
          instruction.innerHTML = "<p>scroll to continue</p>";
          instruction.style.animation = 'flash 2s infinite'
        }
        if (progress >= 428) {
          form.style.transform = `scale(1) translateX(-67px) translateY(-5px)`;
          instruction.innerHTML = "<p>thanks for watching</p>";
          instruction.style.animation = 'none'
        }
      }

      
    });
  }, 5000);
});
