const setup = () => {
    let knop = document.getElementById("button");
    knop.addEventListener("click", uitvoeren)
}

const uitvoeren = () => {
    let isRoker = document.getElementById("isRoker");
    let moedertaal = document.getElementsByName("moedertaal");
    let buurland = document.getElementById("buurland").value;
    let bestelling = document.getElementById("besteling");
    let output = "";

    if (isRoker.checked) {
        output += "is een roker \n"
    } else {
        output += "is geen roker \n"
    }

    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            output += "moedertaal is " + moedertaal[i].value + "\n"
        }
    }
    output += "favoriete buurland " + buurland + "\n";

    output += "bestelling bestaat uit ";
    bestelling = bestelling.options;
    for (let i = 0; i < bestelling.length; i++) {
        let optie = bestelling[i]
        if (optie.selected) {
            output += optie.value + " ";
        }
    }
    console.log(output);
}
window.addEventListener("load", setup);