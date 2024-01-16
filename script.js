const cards = document.getElementsByClassName("card");
const achievements = document.getElementsByClassName("achievements");
const contacts = document.getElementsByClassName("contacts");
const educationButton = document.getElementById("education-button");
let eduOpen = false;

educationButton.addEventListener("click", (e) => {
  if (educationButton.textContent === "See more") {
    eduOpen = true;
    e.target.parentNode.parentNode.style.height = "93vh";
    achievements[0].style.opacity = 0;
    contacts[0].style.opacity = 0;
    educationButton.textContent = "See Less";
    setTimeout(() => {
      achievements[0].style.display = "none";
      contacts[0].style.display = "none";
    }, 900);
  } else {
    eduOpen = false;
    e.target.parentNode.parentNode.style.height = "";
    achievements[0].style.display = "flex";
    contacts[0].style.display = "flex";
    setTimeout(() => {
      achievements[0].style.opacity = 1;
      contacts[0].style.opacity = 1;
    }, 400);
    educationButton.textContent = "See more";
  }
});

function redirect() {
  window.open("https://www.16personalities.com/infj-personality", "_blank");
}

document.getElementById("personality-link").addEventListener("click", redirect);

for (const card of cards) {
  card.addEventListener("click", (e) => {
    if (!e.target.className.includes("redirect")) {
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
