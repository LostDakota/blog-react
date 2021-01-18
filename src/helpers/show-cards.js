export default function ShowCards() {
    setTimeout(() => [...document.getElementsByClassName('card')].forEach(card => card.style.opacity = "1"), 600);
}