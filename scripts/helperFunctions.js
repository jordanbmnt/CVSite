const achievements = document.getElementsByClassName("achievements");
const contacts = document.getElementsByClassName("contacts");
const timeLine = document.getElementById("time-line");
const seeMore = document.getElementsByClassName("see-more")[0];
const container = document.getElementsByClassName("container")[0];

const openEducationSection = (e) => {
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

const closeEducationSection = (e) => {
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

const redirect = () => {
  window.open("https://www.16personalities.com/infj-personality", "_blank");
}
