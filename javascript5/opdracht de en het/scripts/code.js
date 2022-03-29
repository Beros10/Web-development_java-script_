const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel.";
    let output = "";
    for(let i =0; i<zin.length; i++){
        if(zin.substring(i-1,i+3)===" de "){
            output += "het ";
            i = i+2;
        }
        else{
        output += zin.substring(i,i+1);
        }
    }
    console.log(output);
}
window.addEventListener("load", setup);