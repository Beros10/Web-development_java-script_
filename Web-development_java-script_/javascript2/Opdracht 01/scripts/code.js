const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
window.addEventListener("load", setup);

window.alert("Dit is een mededeling");
let confirm = window.confirm('Weet u het zeker?');
let prompt = window.prompt("Wat is uw naam?","onbekend")

console.log(confirm);
console.log(prompt);
