import { quotes } from "./quoteData.js";

const quote = quotes;

let quoteElement = document.getElementsByClassName("quotes")[0];
let selectElement = document.getElementById("select");
let randomBtn = document.getElementsByClassName("random")[0];
let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];
let filteredQuotes = [];
let count = 0;
let toggleButton = document.getElementById('toggle');
let increment = document.getElementsByClassName('increment')[0];
let decrement = document.getElementsByClassName('decrement')[0];
let blackAndWhite = false;
let font = 16;
let body = document.getElementsByTagName('body')[0];

function darkMode(){
  blackAndWhite = !blackAndWhite;
  blackAndWhite === false ? body.style.backgroundColor = 'white' : body.style.backgroundColor = 'black';
  blackAndWhite === false ? body.style.color = 'black' : body.style.color = 'white';
  blackAndWhite === false ? toggle.innerHTML = 'Off' : toggle.innerHTML = 'On';
}

toggleButton.addEventListener('click',darkMode);


function updateFontSize(){
  quoteElement.style.fontSize = `${font}px`;
}

function incrementFont(){
  if(font < 20){
    font++
  }
  updateFontSize();
}

function decrementFont(){
  if(font > 16){
    font--;
  }
  updateFontSize();
}

increment.addEventListener('click',incrementFont);
decrement.addEventListener('click',decrementFont);





function updateQuote() {
  quoteElement.innerHTML = filteredQuotes[count].quote;
}

function nextQuote() {
  if (count < filteredQuotes.length - 1) {
    count++;
    console.log(count);
  }
  updateQuote();
}

function prevQuote() {
  if (count > 0) {
    count--;
    console.log(count);
  }
  updateQuote();
}

next.addEventListener("click", nextQuote);
prev.addEventListener("click", prevQuote);



function randomQuote() { 
  quoteElement.innerHTML =
    filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)].quote;
}

randomBtn.addEventListener("click", randomQuote);



function selector() {
  let optionValue = selectElement.value;
  filteredQuotes = quote.filter(
    (items) => items.category.toLowerCase() === optionValue
  );
  updateQuote();
}

selector();
selectElement.addEventListener("change", selector);
