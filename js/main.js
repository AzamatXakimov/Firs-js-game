// Currency Converter
var elCurrencyForm = document.querySelector("#currency_form");
var elCurrencyInput = document.querySelector("#currency_input");
var elCurrencySelect = document.querySelector("#currency_select");
var elCurrencyOutput = document.querySelector("#currency_output");

elCurrencyForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    elCurrencyOutput.textContent = elCurrencyInput.value * elCurrencySelect.value
})



// SON TOPISH 
var X = Math.floor(Math.random() * (100 - 1 + 1) + 1);
var elGuessForm = document.querySelector("#guess_form");
var elGuessInput = document.querySelector("#guess_input");
var elGuessAlert = document.querySelector("#guess_alert");
var elGuessAnswer = document.querySelector("#guess_answer");
var elGuessTry = document.querySelector("#guess_try");
var elGuessBtn = document.querySelector("#guess_btn")

var Try = 6
elGuessTry.textContent = Try;

elGuessForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    // debugger;
    var InputValue = Number(elGuessInput.value)
    if(Try > 1){
        if(InputValue == X){
            elGuessBtn.setAttribute("disabled", "disabled");
            elGuessInput.setAttribute("disabled", "disabled");
            elGuessAnswer.textContent = "Sonni Toptingiz!!";
            elGuessAnswer.classList.add("guess-answer-correct")
        }
        else if(InputValue > X){
            elGuessAlert.textContent = "Bu son X sondan katta";
            elGuessAlert.classList.remove("guess-alert-less");
            elGuessAlert.classList.add("guess-alert-more");
        }
        else if(InputValue < X){
            elGuessAlert.textContent = "Bu son X sondan kichik";
            elGuessAlert.classList.remove("guess-alert-more");
            elGuessAlert.classList.add("guess-alert-less");
        }
    }
    else{
        elGuessBtn.setAttribute("disabled", "disabled");
        elGuessInput.setAttribute("disabled", "disabled");
        elGuessAnswer.classList.add("guess-answer-lost");
        elGuessAnswer.textContent = "Siz yutqazdingiz";
    }

    elGuessInput.value = ""
    Try = Try - 1
    elGuessTry.textContent = Try

})