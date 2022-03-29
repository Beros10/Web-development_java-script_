const setup = () => {
    let woord = "onoorbaar";
    for(let i = 0; i<woord.length;i++){
        if(i+3 <= woord.length){
        console.log(woord.substring(i,i+3));
        }
    }
}
window.addEventListener("load", setup);