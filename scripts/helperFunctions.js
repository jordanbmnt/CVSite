const achievements = document.getElementsByClassName("achievements")[0].style;
const contacts = document.getElementsByClassName("contacts")[0].style;
const timeLine = document.getElementById("time-line");
const seeMore = document.getElementsByClassName("see-more")[0];
const container = document.getElementsByClassName("container")[0];

const openEducationSection = (e) => {
  const windowWidth = window.innerWidth;
  const elementStyle = e.target.parentNode.parentNode.style;

  eduOpen = true;
  seeMore.style.zIndex = "1";
  seeMore.style.justifyContent = "flex-end";
  educationButton.style.marginRight = "16px";
  educationButton.style.marginTop = "40px";
  seeMore.style.bottom = "93%";
  timeLine.style.scale = 1;
  elementStyle.height = "93vh";
  elementStyle.zIndex = 1000;
  elementStyle.width =
    windowWidth <= 786 ? "100vw" : windowWidth <= 1200 ? "80vw" : "50vw";
  elementStyle.padding = "50px";
  elementStyle.overflowY = "scroll";
  achievements.opacity = 0;
  educationButton.textContent = "See less";
  contacts.opacity = 0;
  setTimeout(() => {
    achievements.display = "none";
    contacts.display = "none";
  }, 900);
};

const closeEducationSection = (e) => {
  const elementStyle = e.target.parentNode.parentNode.style;

  eduOpen = false;
  educationButton.style.marginRight = "0";
  educationButton.style.marginTop = "0";
  seeMore.style.justifyContent = "center";
  seeMore.style.position = "absolute";
  seeMore.style.zIndex = "3";
  seeMore.style.bottom = 0;
  timeLine.style.scale = 0.7;
  elementStyle.overflowY = "hidden";
  elementStyle.height = "";
  elementStyle.width = "";
  elementStyle.padding = "";
  achievements.display = "flex";
  contacts.display = "flex";
  setTimeout(() => {
    achievements.opacity = 1;
    contacts.opacity = 1;
  }, 400);
  educationButton.textContent = "See more";
};

const personalityRedirect = () => {
  window.open("https://www.16personalities.com/infj-personality", "_blank");
};

const githubRedirect = () => {
  window.open("https://github.com/jordanbmnt", "_blank");
};

const contactFormRedirect = () => {
  window.open("/contact", "_self");
};

const creditToRedirect = () => {
  window.open("/creditTo", "_self");
};
