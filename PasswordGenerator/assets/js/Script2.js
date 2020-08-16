var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


var passwordArray = [];

//set the default values for the user input

var lengthEl = 8;
var upperEl = true;
var lowerEl = true;
var numberEl = true;
var symbolEl = true;




var randomFunction = {           //object for all the randomly generated numbers from the functions
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};



generateBtn.addEventListener("click", passwordText); {

    lengthEl = prompt("How many characters should your password be? (enter a whole number between 8 and 128");

    upperEl = confirm("Do you want uppercase letters in your password? (click ok for yes, cancel for no)");

    lowerEl = confirm("Do you want lowercase letters in your password? (click ok for yes, cancel for no)");

    numberEl = confirm("Do you want numbers in your password? (click ok for yes, cancel for no)");

    symbolEl = confirm("Do you want symbols in your password? (click ok for yes, cancel for no)");


    passwordText.value = generatePassword(lengthEl, upperEl,lowerEl,numberEl,symbolEl)

};




function generatePassword(lower, upper, number, symbol, lengthEl) {


    var pwdPool = passwordArray.push(lower, upper, number, symbol,)

    for (i = 0; i < lengthEl + 1; i++) {

        pwdPool.push(lower, upper, number, symbol,);
    }

    return pwdPool;


    var generate = pwdPool.slice(pwdPool.length - lengthEl);


    console.log(generate);

};




function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97)); //generate a random decimal, multiplied by 26 (total number of letters in the alphabet) add 97 to get into the lower case letter range of the character set.
};

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
};

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
};

function getRandomSymbol() {
    var symbolsArray = '!@#$%^&*(){}[]=><,.';
    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
};
