const cards = document.getElementsByClassName("card");
const educationButton = document.getElementById("education-button");
let eduOpen = false;

educationButton.addEventListener("click", (e) => {
  if (educationButton.textContent === "See more") {
    openEducationSection(e);
  } else {
    closeEducationSection(e);
  }
});

document
  .getElementById("personality-link")
  .addEventListener("click", personalityRedirect);
document
  .getElementById("contact-me")
  .addEventListener("click", contactFormRedirect);
document
  .getElementById("github-link")
  .addEventListener("click", githubRedirect);

for (const card of cards) {
  card.addEventListener("click", (e) => {
    if (!e.target.className.includes("redirect") && !eduOpen) {
      const cardTransformation = card.children[0].style.transform;
      const classList = card.children[0].classList;

      card.children[0].style.transform = cardTransformation
        ? ""
        : "rotateY(180deg)";

      if (classList.contains("flip")) card.children[0].classList.remove("flip");
      else card.children[0].classList.add("flip");
    }
  });
}
