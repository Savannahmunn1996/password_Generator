// Assignment code here

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["@", "!", "#", "$", "%", "&", "*"];

const character = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCase = character.map((code) => String.fromCharCode(code));
const upperCase = lowerCase.map((letter) => letter.toUpperCase());
//form = document.getElementById("passwordgenform");

const characterAmountNumber = document.getElementById("lengthh");
const includeNumbersElement = document.getElementById("num");
const includeSymbolsElement = document.getElementById("sym");
const includeLowercaseElement = document.getElementById("L");
const includeUppercaseElement = document.getElementById("U");
const passwordDisplay = document.getElementById("passwordDisplay");

//console.log(lowerCase);
//console.log(upperCase);
//console.log(symbols);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// const nmm = document.getElementById("#num");
// const smm = document.getElementById("#sym");
// const low = document.getElementById("L");
// const up = document.getElementById("U");

//form.addEventListener("submit", (e) => {
//e.preventDefault();

const generatePassword = (e) => {
  const length = parseInt(characterAmountNumber.value);
  const theChoices = [
    ...(includeNumbersElement.checked ? numbers : []),
    ...(includeSymbolsElement.checked ? symbols : []),
    ...(includeLowercaseElement.checked ? lowerCase : []),
    ...(includeUppercaseElement.checked ? upperCase : []),
  ];
  // console.log(theChoices);
  let password = "";
  if (theChoices.length === 0) return "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * theChoices.length);
    password += theChoices[randomIndex];
  }
  return password;
};
//});
//console.log(generatePassword());

//function assignButtons()

// Write password to the #password input

function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  passwordDisplay.innerText = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
