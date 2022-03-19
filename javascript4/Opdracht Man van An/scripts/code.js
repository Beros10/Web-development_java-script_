const setup = () => {
let zin = "De man van An geeft geen hand aan ambetante verwanten"
console.log(tellen(zin));
console.log(tellen2(zin));
}
window.addEventListener("load", setup);

const tellen = (eenzin) => {
    let teller = 0
    let zoekopdracht = "an"
    let positie= eenzin.indexOf(zoekopdracht)
    while (positie>=0){
        teller++;
        positie++;
        positie = eenzin.indexOf(zoekopdracht, positie);
    }
    return(teller)
}
//alternatief
const tellen2 = (eenzin) => {
    let teller = 0
    let zoekopdracht = "an"
    let positie = eenzin.lastIndexOf(zoekopdracht)
    while (positie !== eenzin.indexOf(zoekopdracht)){
        teller++;
        positie--;
        positie = eenzin.lastIndexOf(zoekopdracht, positie);
    }
    //omdat je eerste zal overslaan
    teller++
    return(teller)
}