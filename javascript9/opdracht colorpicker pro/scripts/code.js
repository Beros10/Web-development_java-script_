let SAVEDKLEUREN = [];
let COUNTER = 0;
const setup = () => {
    let sliders = document.getElementsByClassName("slider")
    let knop = document.getElementById('save');
    let reset = document.getElementById('leeg');

    reset.addEventListener("click", reset2);
    knop.addEventListener("click", opslaan);
    sliders[0].addEventListener("input", colorChange)
    sliders[1].addEventListener("input", colorChange)
    sliders[2].addEventListener("input", colorChange)
    Inladen();
}
const reset2 = () => {
    localStorage.clear();
}
const colorChange = () => {
    let sliderRed = document.getElementById("sliderRed");
    let sliderGreen = document.getElementById("sliderGreen");
    let sliderBlue = document.getElementById("sliderBlue");

    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;
    colorChangeMetvalues(valueRed,valueGreen,valueBlue);

}
const colorChangeMetvalues = (Red,Green,Blue) => {
    let cijferRed = document.getElementById("cijferRed");
    let cijferGreen = document.getElementById("cijferGreen");
    let cijferBlue = document.getElementById("cijferBlue");

    let sliderRed = document.getElementById("sliderRed");
    let sliderGreen = document.getElementById("sliderGreen");
    let sliderBlue = document.getElementById("sliderBlue");

    sliderRed.value = Red;
    sliderGreen.value = Green;
    sliderBlue.value = Blue;

    let vierkant = document.querySelector(".vierkant");

    cijferRed.innerHTML = Red;
    cijferGreen.innerHTML = Green;
    cijferBlue.innerHTML = Blue;

    let color = 'rgb(' + Red + ', ' + Green + ', ' + Blue + ')';
    vierkant.style.background = color;
    let settings = {
        SLIDERRED: Red,
        SLIDERGREEN: Green,
        SLIDERBLUE: Blue
    }
    let json = JSON.stringify(settings)
    localStorage.setItem("sliders",json)
}
const opslaan = () => {
    let valueRed = document.getElementById("sliderRed").value;
    let valueGreen = document.getElementById("sliderGreen").value;
    let valueBlue = document.getElementById("sliderBlue").value;
    let kruisje = oplsaanMetMeegegevenKleuren(valueRed, valueGreen, valueBlue);
    let kleuren = {
        valueRed: valueRed,
        valueGreen: valueGreen,
        valueBlue: valueBlue,
        id: COUNTER
    }
    SAVEDKLEUREN.push(kleuren)
    let json = JSON.stringify(SAVEDKLEUREN)
    kruisje.setAttribute('id', COUNTER.toString())
    COUNTER++;
    localStorage.setItem("saved", json);
    localStorage.setItem("counter", COUNTER.toString())
}
const oplsaanMetMeegegevenKleuren = (Red, Green, Blue) => {
    let saved = document.getElementById("savedValues");
    let vierkant = document.createElement('div');
    let color = 'rgb(' + Red + ', ' + Green + ', ' + Blue + ')';
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
    return kruisje
}
const savedLaden = (event) => {
    let savedVierkant = event.target;
    let savedVierkantStyle = savedVierkant.getAttribute('style');
    let color = savedVierkantStyle.substring(16);
    let colors = color.split(", ");
    let rood = colors[0];
    let groen = colors[1];
    let blue = colors[2].slice(0, -2);

    document.getElementById("sliderRed").value = rood;
    document.getElementById("sliderGreen").value = groen;
    document.getElementById("sliderBlue").value = blue;
    colorChange();
}
const verwijder = (event) => {
    let kruis = event.currentTarget;
    let vierkant = kruis.parentElement;
    let idVierkant = kruis.getAttribute('id');
    for (let i = 0; i < SAVEDKLEUREN.length; i++) {
        if (parseInt(idVierkant) === SAVEDKLEUREN[i].id) {
            document.getElementById("savedValues").removeChild(vierkant);
            SAVEDKLEUREN.splice(i,1)
            let json = JSON.stringify(SAVEDKLEUREN)
            localStorage.setItem('saved',json)

        }
    }
    event.stopPropagation();
}
const Inladen = () => {
    if (localStorage.getItem('counter') !== null) {
        COUNTER = parseInt(localStorage.getItem('counter'));
    }
    let jsonSaved = localStorage.getItem("saved");
    if (jsonSaved !== null) {
        SAVEDKLEUREN = JSON.parse(jsonSaved);
    }
    for (let i = 0; i < SAVEDKLEUREN.length; i++) {
        let saved = SAVEDKLEUREN[i];
        let kruisje = oplsaanMetMeegegevenKleuren(saved.valueRed, saved.valueGreen, saved.valueBlue);
        kruisje.setAttribute('id',saved.id);
    }
    if(localStorage.getItem('sliders') !== null){
        let setting = JSON.parse(localStorage.getItem('sliders'))
        colorChangeMetvalues(setting.SLIDERRED,setting.SLIDERGREEN,setting.SLIDERBLUE);
    }
    else {
        colorChange();
    }

}
window.addEventListener("load", setup);