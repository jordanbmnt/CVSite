const cards = document.getElementsByClassName("card");
const achievements = document.getElementsByClassName("achievements");
const contacts = document.getElementsByClassName("contacts");
const educationButton = document.getElementById("education-button");
const timeLine = document.getElementById("time-line");
const seeMore = document.getElementsByClassName("see-more")[0];
const container = document.getElementsByClassName("container")[0];
let eduOpen = false;

const openEducation = (e) => {
  seeMore.style.justifyContent = "flex-end";
  educationButton.style.marginRight = "16px";
  seeMore.style.zIndex = "1";
  seeMore.style.bottom = "93%";
  timeLine.style.scale = 1;
  eduOpen = true;
  e.target.parentNode.parentNode.style.height = "93vh";
  e.target.parentNode.parentNode.style.width = "35vw";
  e.target.parentNode.parentNode.style.padding = "50px";
  e.target.parentNode.parentNode.style.overflowY = "scroll";
  achievements[0].style.opacity = 0;
  contacts[0].style.opacity = 0;
  educationButton.textContent = "See less";
  setTimeout(() => {
    achievements[0].style.display = "none";
    contacts[0].style.display = "none";
  }, 900);
};

const closeEducation = (e) => {
  educationButton.style.marginRight = "0";
  seeMore.style.justifyContent = "center";
  seeMore.style.position = "absolute";
  timeLine.style.scale = 0.7;
  seeMore.style.zIndex = "3";
  seeMore.style.bottom = 0;
  eduOpen = false;
  e.target.parentNode.parentNode.style.overflowY = "hidden";
  e.target.parentNode.parentNode.style.height = "";
  e.target.parentNode.parentNode.style.width = "";
  e.target.parentNode.parentNode.style.padding = "";
  achievements[0].style.display = "flex";
  contacts[0].style.display = "flex";
  setTimeout(() => {
    achievements[0].style.opacity = 1;
    contacts[0].style.opacity = 1;
  }, 400);
  educationButton.textContent = "See more";
};

educationButton.addEventListener("click", (e) => {
  if (educationButton.textContent === "See more") {
    openEducation(e);
  } else {
    closeEducation(e);
  }
});

function redirect() {
  window.open("https://www.16personalities.com/infj-personality", "_blank");
}

document.getElementById("personality-link").addEventListener("click", redirect);

for (const card of cards) {
  card.addEventListener("click", (e) => {
    if (!e.target.className.includes("redirect") && !eduOpen) {
      const cardTransformation = card.children[0].style.transform;
      card.children[0].style.transform = cardTransformation
        ? ""
        : "rotateY(180deg)";
      const classList = card.children[0].classList;
      if (classList.contains("flip")) card.children[0].classList.remove("flip");
      else card.children[0].classList.add("flip");
    }
  });
}
