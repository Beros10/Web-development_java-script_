let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", start);
};

const start = () => {
    let knop = document.getElementById("knop");
    knop.remove();
    spelen();
}
const spelen = () => {
    let speelveld = document.getElementById("playField");
    let img = document.createElement("img");
    geefsrc(img);
    speelveld.appendChild(img);
    global.timeoutId = setInterval(verplaats_verander_img,global.MOVE_DELAY)
    img.addEventListener("click", check)
    }
const verplaats_verander_img = () => {
    let speelveld = document.getElementById("playField");
    let img = document.getElementById('target')
    let maxLeft = speelveld.clientWidth - img.offsetWidth;
    let maxHeight = speelveld.clientHeight - img.offsetHeight;
    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    img.style.left = left + "px";
    img.style.top = top + "px";
    geefsrc(img);
}
const check = () => {
    let img = document.getElementById('target')
    let imgnummer = img.src.slice(-5,-4);
    if(imgnummer==="0"){
        verloren()
        document.location.reload(true)
    }
    else{
        global.score+=1;
        let counter = document.getElementById("counter");
        counter.innerText = global.score;
        verplaats_verander_img()
    }
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(verplaats_verander_img,global.MOVE_DELAY)
}
const geefsrc = (img) => {
    let getal = Math.floor(Math.random() * 5);
    img.src = global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX;
    img.id = "target";
}
const verloren =()=>{
    window.alert("je bent verloren je score was "+global.score)
}
window.addEventListener("load", setup);


