const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
window.addEventListener("load", setup);

let familieleden = ['patrick','peter','kenny','kelly','jeffrey','wesley','wendy'];

console.log(familieleden.length);

console.log(familieleden[0],familieleden[2],familieleden[4]);

function voegNaamToe(){
    familieleden.push(prompt());
}
voegNaamToe();
console.log(familieleden);

console.log(familieleden.join(', '));
