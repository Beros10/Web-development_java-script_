const setup = () => {
    let pElement = document.querySelector('p');
    let firstChild = pElement.firstChild
    let tekst = document.createTextNode("Good job!");
    pElement.removeChild(firstChild)
    pElement.appendChild(tekst);
}
window.addEventListener("load", setup);