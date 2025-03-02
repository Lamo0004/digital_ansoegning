const body = document.querySelector("body");
const time = document.querySelector("p");

const magiContainer = document.querySelector(".magi_folder");
const magiVideo = document.querySelector(".magi_video");

const bookContainer = document.querySelector(".book_folder");
const bookImg = document.querySelector(".book_img");

//Finder dag, dato og tid og udskriver det i <p> element
function timeClock() {
  let today = new Date();
  let day = nameOnDay(today.getDay());
  let month = nameOnMonth(today.getMonth());
  let date = today.getDate();
  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());

  let current_date_and_time = `${day} ${date}. ${month} ${hours}.${minutes}`;
  time.innerHTML = current_date_and_time;

  function nameOnDay(num) {
    switch (num) {
      case 0:
        return "søn.";
      case 1:
        return "man.";
      case 2:
        return "tirs.";
      case 3:
        return "ons.";
      case 4:
        return "tors.";
      case 5:
        return "fre.";
      case 6:
        return "lør.";
    }
  }

  function nameOnMonth(num) {
    switch (num) {
      case 0:
        return "jan.";
      case 1:
        return "feb.";
      case 2:
        return "mar.";
      case 3:
        return "apr.";
      case 4:
        return "maj";
      case 5:
        return "jun.";
      case 6:
        return "jul.";
      case 7:
        return "aug.";
      case 8:
        return "sep.";
      case 9:
        return "okt.";
      case 10:
        return "nov.";
      case 11:
        return "dec.";
    }
  }

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }
}

// Opdater tid i funktionen timeClock hvert minut
setInterval(timeClock, 10000);

// Kør funktionen med det samme, så vi ikke venter 1 minut
timeClock();

//Eventlisteners på mapper(containere)
magiContainer.addEventListener("dblclick", () => {
  magiVideo.style.display = "block";
  magiVideo.play();
});

bookContainer.addEventListener("dblclick", () => {
  bookImg.style.display = "block";
});

//Eventlistener på body – fjern alt
body.addEventListener("click", () => {
  magiVideo.pause();
  magiVideo.style.display = "none";
  bookImg.style.display = "none";
});
