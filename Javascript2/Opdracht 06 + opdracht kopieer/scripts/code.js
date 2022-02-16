const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);

// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}

window.addEventListener("load", setup);
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML=tekst;
}