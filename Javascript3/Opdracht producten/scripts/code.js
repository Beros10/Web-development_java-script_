const setup = () => {
    let herbereken = document.getElementById("herbereken");
    herbereken.addEventListener("click", formule);
}
const formule = () => {
    //let percentage1 = document.getElementById("6procent");
    //let percentage2 = document.getElementsByClassName("21procent")
    let percentages = document.getElementsByClassName("percentage");
    let prijzen = document.getElementsByClassName("prijsStuk");
    let prijs = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let totalePrijs = document.getElementById("prijsTotaal");
    //let percentage1Val = parseInt(percentage1.innerText);
    //let percentage2Val = parseInt(percentage2[0].innerHTML);

    let prijs1 = parseFloat(prijzen[1].textContent).toFixed(2);
    let prijs2 = parseFloat(prijzen[2].textContent).toFixed(2);
    let prijs3 = parseFloat(prijzen[3].textContent).toFixed(2);

    let percentage1 = parseFloat(percentages[1].textContent).toFixed(2);
    let percentage2 = parseFloat(percentages[2].textContent).toFixed(2);
    let percentage3 = parseFloat(percentages[3].textContent).toFixed(2);

    let aantal1 = aantallen[1].value;
    let aantal2 = aantallen[2].value;
    let aantal3 = aantallen[3].value;

    let subTotaal1 = parseFloat((prijs1 * aantal1) * ((percentage1 + 100) / 100) + (prijs1 * aantal1)).toFixed(2);
    let subTotaal2 = parseFloat((prijs2 * aantal2) * ((percentage2 + 100) / 100) + (prijs2 * aantal2)).toFixed(2);
    let subTotaal3 = parseFloat((prijs3 * aantal3) * ((percentage3 + 100) / 100) + (prijs3 * aantal3)).toFixed(2);

    prijs[1].textContent = subTotaal1 + " Eur";
    prijs[2].textContent = subTotaal2 + " Eur";
    prijs[3].textContent = subTotaal3 + " Eur";

    totalePrijs.textContent = (parseFloat(subTotaal1)+parseFloat(subTotaal2)+parseFloat(subTotaal3)).toFixed(2);


}
window.addEventListener("load", setup);