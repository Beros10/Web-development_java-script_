let personen = [];
let persoon = {
    voornaam: '',
    familienaam: '',
    geboorteDatum: '',
    email: '',
    aantalkinderen: ''
}
let global = {
    INDEX: -1
}
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    if (valideer()) {
        let voornaam = document.getElementById('txtVoornaam').value;
        let familienaam = document.getElementById('txtFamilienaam').value;
        let geboortedatum = document.getElementById('txtGeboorteDatum').value
        let email = document.getElementById("txtEmail").value;
        let aantalkinderen = document.getElementById('txtAantalKinderen').value;

        persoon.voornaam = voornaam;
        persoon.familienaam = familienaam;
        persoon.geboorteDatum = geboortedatum;
        persoon.email = email;
        persoon.aantalkinderen = aantalkinderen;

        let select = document.getElementById('lstPersonen');
        let string = JSON.stringify(persoon);

        if (global.INDEX === -1) {
            let newOption = document.createElement('option');
            newOption.setAttribute('id', personen.length.toString())
            personen.push(string)
            let tekst = document.createTextNode(persoon.voornaam + ' ' + persoon.familienaam);
            newOption.append(tekst);
            select.append(newOption);
            newOption.addEventListener('click', laden);
        } else {
            personen[global.INDEX] = string;
            let id = global.INDEX;
            let option = document.getElementById(id);
            let tekst = document.createTextNode(persoon.voornaam + ' ' + persoon.familienaam);
            let kind = option.firstChild;
            option.removeChild(kind);
            option.append(tekst)
        }
    }
}
const laden = (event) => {
    let target = event.currentTarget;
    global.INDEX = target.getAttribute('id');
    persoon = JSON.parse(personen[global.INDEX]);
    document.getElementById('txtVoornaam').value = persoon.voornaam;
    document.getElementById('txtFamilienaam').value = persoon.familienaam;
    document.getElementById('txtGeboorteDatum').value = persoon.geboorteDatum;
    document.getElementById('txtEmail').value = persoon.email;
    document.getElementById('txtAantalKinderen').value = persoon.aantalkinderen;

}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    global.INDEX = -1;
    document.getElementById('txtVoornaam').value = null;
    document.getElementById('txtFamilienaam').value = null;
    document.getElementById('txtGeboorteDatum').value = null;
    document.getElementById("txtEmail").value = null;
    document.getElementById('txtAantalKinderen').value = null;
}
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
}
window.addEventListener("load", setup);