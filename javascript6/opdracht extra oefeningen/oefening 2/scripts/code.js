const setup = () => {
    let nodeList = document.querySelectorAll('li');
    for(let i =0; i<nodeList.length;i++){
        nodeList[i].classList.add('listItem')

    }
    let element = document.createElement('img');
    let body = document.querySelector('body')
    element.setAttribute('src','img/sloth.jpg');
    body.append(element);
}
window.addEventListener("load", setup);