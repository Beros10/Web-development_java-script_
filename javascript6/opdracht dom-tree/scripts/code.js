const setup = () => {
    let element = document.getElementById("abc");
    let elementNode = element.childNodes;
    console.log(elementNode);
    for(let i=0;i<elementNode.length;i++){
        if(elementNode[i].nodeName === "#text"){
            console.log(elementNode[i]);
        }
    }
}
window.addEventListener("load", setup);