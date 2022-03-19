const setup = () => {
    let knop = document.getElementById("button");
    knop.addEventListener("click", maaktMetSpaties);
}

const maaktMetSpaties = () => {
    let tekst = document.getElementById("text");
    tekst = tekst.value;
    tekst = tekst.split(' ').join('')
    let i = 0
    let string = ""
    while(i<tekst.length){
        string += tekst[i] + " "
        i++
    }
    console.log(string)
}
    window.addEventListener("load", setup)
