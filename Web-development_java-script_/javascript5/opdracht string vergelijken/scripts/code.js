const setup = () => {
    let string1 = "Dit is een string";
    let string2 = "Dit is een string";
    let string3 ="Dit"
    let string4 ="Dit is een"
    if(string1==string2){
        console.log(true);
    }
    else{
        console.log(false);
    }
    if(string1===string2){
        console.log(true)
    }
    else{
        console.log(false)
    }
    if(string3 == string1.substring(0,4)){
        console.log(string1.substring(0,4))
        console.log(true);
    }
    else{
        console.log(false)
    }
    if(string3 == string1.substring(0,3)){
        console.log(true);
    }
    else{
        console.log(false)
    }
    if(string3 === string1.substring(0,3)){
        console.log(true);
    }
    else{
        console.log(false)
    }
    if(string4+"strin" == string1.slice((-1))){
        console.log(true)
    }
    else{
        console.log(false)
    }
    if(string4+"strin" === string1.slice((-1))){
        console.log(true)
    }
    else{
        console.log(false)
    }

}
window.addEventListener("load", setup);