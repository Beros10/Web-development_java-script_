const setup = () => {
    let huidigeDatum = new Date();
    let geboortedatum = new Date(2002,4,10);

    let verschil = huidigeDatum-geboortedatum;
    let datum = verschil/1000/3600/24
    console.log(datum)
}
window.addEventListener("load", setup);