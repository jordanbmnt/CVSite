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
  });
}
