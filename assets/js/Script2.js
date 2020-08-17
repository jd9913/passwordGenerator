var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


//set the default values for the user input

var lengthEl = 0;
var upperEl = true;
var lowerEl = true;
var numberEl = true;
var symbolEl = true;



var typeArray = [{ upperEl } + { lowerEl } + { numberEl } + { symbolEl }]; //place all of the types into their own array

var lower = [getRandomLower()];
var upper = [getRandomUpper()];
var num = [getRandomNumber()];
var sym = [getRandomSymbol()];

var passwordArray = []; //place randomly generated characters into their own array




generateBtn.addEventListener("click", passwordText); {

    lengthEl = prompt("How many characters should your password be? (enter a whole number between 8 and 128");

    upperEl = confirm("Do you want uppercase letters in your password? (click ok for yes, cancel for no)");

    lowerEl = confirm("Do you want lowercase letters in your password? (click ok for yes, cancel for no)");

    numberEl = confirm("Do you want numbers in your password? (click ok for yes, cancel for no)");

    symbolEl = confirm("Do you want symbols in your password? (click ok for yes, cancel for no)");



    passwordText.value = generatePassword(passwordArray);

};

/*function typeVerify(typeArray) {  //verify which of the user inputs are true and which are false

    if (upperEl) {
        passwordArray += upper;
    } else


        if (lowerEl) {
            passwordArray += lower;
        } else


            if (numberEl) {
                passwordArray += num;
            } else



                if (symbolEl) {
                    passwordArray += sym;
                } else {
                    sym = "";
                }
    return typeArray;*/



function generatePassword() {       //going to take the true user inputs and add them to an array

    var typeArray = [];

    if (upperEl) {
        typeArray+= upper;
    }

    if (lowerEl) {
        typeArray += lower;
    }

        if (numberEl) {
        typeArray += num;
    }
    if (symbolEl) {
        typeArray += sym;
    }

    var generate = passwordArray;

    for (var i = 0; i < lengthEl - 1; i++) {

        if (upperEl) {
            passwordArray += upper;
        }

        if (lowerEl) {
            passwordArray += lower;
        }

        if (numberEl) {
            passwordArray += num;
        }
        if (symbolEl) {
            passwordArray += sym;
        }
        return typeArray = passwordArray;
    }

    //generate = passwordArray.slice(passwordArray.length - lengthEl);

    return generate;



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


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}