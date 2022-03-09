const setup = () => {
    let sliders = document.getElementsByClassName("slider")
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
    let vierkant = document.getElementsByClassName("vierkant");

    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;

    cijferRed.innerHTML = valueRed;
    cijferGreen.innerHTML = valueGreen;
    cijferBlue.innerHTML = valueBlue;

    let color = 'rgb('+valueRed+', ' + valueGreen + ', '+valueBlue+')';
    console.log(color);
    vierkant[0].style.background = color;
}

window.addEventListener("load", setup);
window.addEventListener("load", colorChange);
