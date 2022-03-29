const setup = () => {
    let btnsubstring = document.getElementById('knop');
    btnsubstring.addEventListener('click', substringen)
}
window.addEventListener("load", setup);

const substringen = () => {
    let text = document.getElementById('text');
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let output = document.getElementById('output');


    let resultaatTekst = text.value.substring(start.value,stop.value);

    console.log(resultaatTekst)
    output.innerHTML=resultaatTekst;

}