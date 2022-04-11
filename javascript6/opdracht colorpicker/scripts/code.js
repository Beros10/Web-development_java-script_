const setup = () => {
    let sliders = document.getElementsByClassName("slider")
    let knop = document.querySelector('button');

    knop.addEventListener("click", opslaan);
    sliders[0].addEventListener("input", colorChange)
    sliders[1].addEventListener("input", colorChange)
    sliders[2].addEventListener("input", colorChange)
}
const colorChange = () => {
    let sliderRed = document.getElementById("sliderRed");
    let sliderGreen = document.getElementById("sliderGreen");
    let sliderBlue = document.getElementById("sliderBlue");
    let cijferRed = document.getElementById("cijferRed");
    let cijferGreen = document.getElementById("cijferGreen");
    let cijferBlue = document.getElementById("cijferBlue");
    let vierkant = document.querySelector(".vierkant");

    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;

    cijferRed.innerHTML = valueRed;
    cijferGreen.innerHTML = valueGreen;
    cijferBlue.innerHTML = valueBlue;

    let color = 'rgb(' + valueRed + ', ' + valueGreen + ', ' + valueBlue + ')';
    vierkant.style.background = color;
}
const opslaan = () => {
    let valueRed = document.getElementById("sliderRed").value;
    let valueGreen = document.getElementById("sliderGreen").value;
    let valueBlue = document.getElementById("sliderBlue").value;

    let saved = document.getElementById("savedValues");
    let vierkant = document.createElement('div');
    let color = 'rgb(' + valueRed + ', ' + valueGreen + ', ' + valueBlue + ')';
    let kruisje = document.createElement("button");
    let img = document.createElement('img');

    img.setAttribute('src', 'img/kruis.png')
    kruisje.setAttribute('class', 'kruisje')
    kruisje.appendChild(img)
    vierkant.appendChild(kruisje);
    vierkant.setAttribute('class', 'vierkant');
    vierkant.style.background = color;
    saved.appendChild(vierkant);
    vierkant.addEventListener('click', savedLaden)
    kruisje.addEventListener('click', verwijder);
}
const savedLaden = (event) => {
    let savedVierkant = event.target;
    let savedVierkantStyle = savedVierkant.getAttribute('style');
    let color = savedVierkantStyle.substring(16);
    let colors = color.split(", ");

    let rood = colors[0];
    let groen = colors[1];
    let blue = colors[2].slice(0, -2);

    document.getElementById("sliderRed").value=rood;
    document.getElementById("sliderGreen").value=groen;
    document.getElementById("sliderBlue").value=blue;
    colorChange();
}
const verwijder = (event) => {
    let kruis = event.currentTarget;
    let vierkant = kruis.parentElement;
    document.getElementById("savedValues").removeChild(vierkant)
}
window.addEventListener("load", setup);
window.addEventListener("load", colorChange);
