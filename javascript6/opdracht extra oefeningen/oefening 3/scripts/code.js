const setup = () => {
    let knop = document.createElement('button');
    let tekst = document.createTextNode('Knop');
    knop.appendChild(tekst);
    let paragraaf = document.getElementsByTagName('p');
    paragraaf[0].appendChild(knop);
    knop.addEventListener('click', toevoegen);

}
const toevoegen = () => {
    let tekst = window.prompt("geef een tekst");
    let div = document.querySelector("div");
    let tekstNode = document.createTextNode(tekst)
    let pEl = document.createElement('p');
    pEl.appendChild(tekstNode);
    div.appendChild(pEl);
}
window.addEventListener("load", setup);