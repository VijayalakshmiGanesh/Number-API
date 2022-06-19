var number = document.querySelector("#Number");
var output = document.querySelector("#converted");
var btn = document.querySelector("#submit");

btn.addEventListener("click", clickHandler)
console.log("inside js");
function clickHandler() {
    var input = number.value;
    var URL = "https://api.funtranslations.com/translate/numbers.json?text=" + input;
    console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
            console.log(translatedText);
        }).catch(errorHandler)

};

function errorHandler(error) {
    alert("Something is Wrong.. " + error)
}