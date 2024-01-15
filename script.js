const cards = document.getElementsByClassName("card");

function redirect() {
  window.open("https://www.16personalities.com/infj-personality", "_blank");
}

document.getElementById("personality-link").addEventListener("click", redirect);

for (const card of cards) {
  card.addEventListener("click", () => {
    const cardTransformation = card.children[0].style.transform;
    card.children[0].style.transform = cardTransformation
      ? ""
      : "rotateY(180deg)";
      const classList = card.children[0].classList;
      if(classList.contains("flip")) card.children[0].classList.remove("flip");
      else card.children[0].classList.add("flip");
      console.log(classList)
  });
}

