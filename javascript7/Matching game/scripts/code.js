let global ={
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6

}
const setup = () => {
    let kaarten = []
    for(let i =0;i<7;i++){
        if(i===0) {
            kaarten[i] = "achterkant.png"
        }
        else{
            kaarten[i] = "kaart"+i+".png"
        }
    }
    for(let i=1;i<7;i++){
            kaarten[i+6] = "kaart"+i+".png"
    }
    console.log(kaarten)
    for(let j = 1; j < global.AANTAL_KAARTEN*2+1; j++) {
        let speelveld= document.getElementById('speelveld');
        let tag1 = document.createElement("div");
        tag1.classList.add('kaart')
        tag1.classList.add('deKaart')
        let value="deKaart"+j;
        tag1.setAttribute("id",value)
        let tag2 = document.createElement("div");
        tag2.classList.add('voorkant')
        let tag3 = document.createElement("div");
        tag3.classList.add('achterkant')
        let tag4 = document.createElement("img");
        let gekozenKaart = Math.floor(1+Math.random()*kaarten.length)
        tag4.src = 'images/' + kaarten[gekozenKaart];
        kaarten.splice(gekozenKaart,1);
        let value1= "foto"+j
        tag4.setAttribute("id", value1)
        let tag5 = document.createElement("img");
        tag5.src='images/achterkant.png'
        tag2.appendChild(tag5)
        tag3.appendChild(tag4)
        tag1.appendChild(tag2)
        tag1.appendChild(tag3)
        speelveld.appendChild(tag1)
    }
    

}


window.addEventListener("load", setup);