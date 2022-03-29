const setup = () => {
    let gestopt = false;
    let input = "";
    while (!gestopt) {
        let invoer = window.prompt("Geef een gemeente")
        if (invoer !== "stop") {
            input += invoer + " ";
        } else {
            gestopt = true;
        }
    }
    input = input.split(" ");
    input = input.sort();
    for (let i = 1; i < input.length; i++) {
        let optionMaken = '<option value="' + input[i] + '">' + input[i] + '</option> <br>';
        document.getElementById("keuzelijst").innerHTML += optionMaken;
    }
}
window.addEventListener("load", setup);