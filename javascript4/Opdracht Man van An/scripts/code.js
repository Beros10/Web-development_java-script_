const setup = () => {
let zin = "De man van An geeft geen hand aan ambetante verwanten"
console.log(tellen(zin));
console.log(tellen2(zin));
}
window.addEventListener("load", setup);

const tellen = (eenzin) => {
    let teller = 0
    let zoekopdracht = "an"
    let eenZin = eenzin.toLowerCase();
    let positie= eenZin.indexOf(zoekopdracht)
    while (positie>=0){
        teller++;
        positie++;
        positie = eenZin.indexOf(zoekopdracht, positie);
    }
    return(teller)
}
//alternatief
const tellen2 = (eenzin) => {
    let teller = 0
    let zoekopdracht = "an"
    let eenZin = eenzin.toLowerCase();
    let positie = eenZin.lastIndexOf(zoekopdracht)
    while (positie !== eenZin.indexOf(zoekopdracht)){
        teller++;
        positie--;
        positie = eenZin.lastIndexOf(zoekopdracht, positie);
    }
    //omdat je eerste zal overslaan
    teller++
    return(teller)
}