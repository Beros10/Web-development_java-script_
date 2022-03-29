const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", valideer)
}

const valideer = () => {
    let correct = false;
    valideervoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
    if (valideervoornaam() && valideerFamilienaam() && valideerGeboortedatum() && valideerEmail() && valideerAantalKinderen()) {
        correct = true;
    }
    if (correct) {
        window.alert('Proficiat')
    }
}
const valideervoornaam = () => {
    let voornaam = document.getElementById("voornaam");
    let voornaamtekst = voornaam.value.trim();
    if (voornaamtekst.length > 30) {
        setError(voornaam, "max. 30 karakters");
        return false;
    } else {
        eraseError(voornaam);
        return true;
    }
}

const valideerFamilienaam = () => {
    let familienaam = document.getElementById('familienaam')
    let familienaamtekst = familienaam.value.trim();
    if (familienaamtekst.length <= 0) {
        setError(familienaam, "verplicht veld")
        return false;
    } else if (familienaamtekst.length > 50) {
        setError(familienaam, "max. 50 karakters");
        return false;
    } else {
        eraseError(familienaam);
        return true;
    }
}

const valideerGeboortedatum = () => {
    let geboortedatum = document.getElementById('geboortedatum');
    let geboortedatumWaarde = geboortedatum.value.trim();
    let jaar = geboortedatumWaarde.substring(0, 4);
    let maand = geboortedatumWaarde.substring(5, 7);
    let dag = geboortedatumWaarde.substring(8, 10);
    if (geboortedatumWaarde.length <= 0) {
        setError(geboortedatum, 'verplicht veld');
        return false;
    } else if (!isGetal(jaar) || !isGetal(maand) || !isGetal(dag)) {
        setError(geboortedatum, 'formaat is niet jjjj‐mm‐dd');
        return false;
    } else if (geboortedatumWaarde.charAt(4) !== '-' && geboortedatumWaarde.charAt(7) !== '-') {
        setError(geboortedatum, 'formaat is niet jjjj‐mm‐dd');
        return false;
    } else {
        eraseError(geboortedatum);
        return true;
    }
}

const valideerEmail = () => {
    let email = document.getElementById('email');
    let emailWaarde = email.value.trim();
    if (emailWaarde.length <= 0) {
        setError(email, 'verplicht veld');
        return false;
    } else if (emailWaarde.indexOf('@') === -1) {
        setError(email, 'geen geldig email adres');
        return false;
    } else if (emailWaarde.indexOf('@') === 0 || emailWaarde.indexOf('@') === emailWaarde.length - 1) {
        setError(email, 'geen geldig email adres');
        return false;
    } else {
        eraseError(email);
        return true;
    }
}
const valideerAantalKinderen = () => {
    let kinderen = document.getElementById('kinderen');
    let kinderenWaarde = kinderen.value.trim();
    if (!isGetal(kinderenWaarde)) {
        setError(kinderen, 'geef een positief getal');
        return false;
    } else if (kinderenWaarde < 0) {
        setError(kinderen, 'geef een positief getal');
        return false;
    } else if (kinderenWaarde >= 99) {
        setError(kinderen, 'te vruchtbaar');
        return false;
    } else {
        eraseError(kinderen);
        return true;
    }
}
const setError = (element, message) => {
    let elementIdErrorString = element.getAttribute('id');
    elementIdErrorString += 'Error';
    let errorElement = document.getElementById(elementIdErrorString);
    element.style.borderColor = '#FF0000';
    element.style.backgroundColor = '#FFCCCB';
    errorElement.innerText = message;
}

const eraseError = (element) => {
    let elementIdErrorString = element.getAttribute('id');
    elementIdErrorString += 'Error';
    let errorElement = document.getElementById(elementIdErrorString);
    element.style.borderColor = '';
    element.style.backgroundColor = '';
    errorElement.innerText = '';
}
const isGetal = (tekst) => {
    return !isNaN(tekst);
}
window.addEventListener("load", setup);