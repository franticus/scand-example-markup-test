const cards = document.querySelectorAll('.card');
const halfHeight = 0;
const halfWidth= 0;

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('mousemove', rotate);
  card.addEventListener('mouseout', reset)
}

function reset(e) {
  const cardItem = this.querySelector('.card__item');
  const halfHeight = cardItem.offsetHeight / 2
  const halfWidth = cardItem.offsetWidth / 2

  cardItem.style.transform = `rotate(0)`
}

function rotate(e) {
  const cardItem = this.querySelector('.card__item');
  const halfHeight = cardItem.offsetHeight / 2
  const halfWidth = cardItem.offsetWidth / 2
  cardItem.style.transform =
    `scale(1.1) rotateX(${-(e.offsetY - halfHeight) / 12}deg)
        rotateY(${(e.offsetX - halfWidth) / 12}deg)`
}