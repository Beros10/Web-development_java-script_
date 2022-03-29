const setup = () => {
    let wijzig = document.getElementById("wijzig");
    wijzig.addEventListener("click",wijzigen);
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
window.addEventListener("load", setup);

const wijzigen = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}