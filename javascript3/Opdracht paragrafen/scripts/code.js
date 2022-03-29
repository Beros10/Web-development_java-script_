const setup = () => {
    let pBelangrijk = document.getElementsByClassName("belangrijk");
    for(let i = 0; i<pBelangrijk.length;i++){
        pBelangrijk.item(i).classList.add("opvallend");
    }
}
window.addEventListener("load", setup);