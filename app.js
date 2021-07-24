
var inputText = document.querySelector("#textInput");
var outputText = document.querySelector("#textOutput");

var btnTranslate = document.querySelector("#btnTranslate");

var serverUrl= "https://api.funtranslations.com/translate/minion.json";

// function clickHandler() {
//     console.log(inputText.value);
// }

// btnTranslate.addEventListener("click", clickHandler())

function getTranslaterUrl() {
    return serverUrl + "?" + "text=" + inputText.value ;
}

/** Error handling**/
function errorHandler(error){
    console.log("error occure" ,error);
}

btnTranslate.addEventListener("click", function clickHandler() {
    console.log("button clicked");
    // var textInput = inputText.value;

    fetch(getTranslaterUrl(textInput))
    .then(response => response.json())
    .then(json => {
        console.log(json)
        var translatedText = json.contents.translated;
        console.log(json)
        outputText.innerHTML = translatedText;
    })
    .catch(errorHandler);
})