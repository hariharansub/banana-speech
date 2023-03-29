var btnTranslate = document.querySelector("#btnTranslate");
let englishTextAreaValue = document.getElementById("englishTextArea");

console.log(englishTextAreaValue.value);
englishTextAreaValue.addEventListener('input', function printValue(event){
    console.log(event.target.value);
})

