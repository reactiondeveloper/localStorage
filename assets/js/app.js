let checkBox = document.querySelector("#gridCheck:checked")
let submitButton = document.getElementById("submitButton")

submitButton.onclick = (event) => {
    event.preventDefault();
    if(checkBox){
        console.log("click korsi")
    }
}