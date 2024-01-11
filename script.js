const cards = document.getElementsByClassName("card");

for (const card of cards) {
  card.addEventListener("click", () => {
    const cardTransformation = card.children[0].style.transform;
    card.children[0].style.transform = cardTransformation
      ? ""
      : "rotateY(180deg)";
  });
}
