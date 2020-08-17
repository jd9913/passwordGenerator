//Length = 8 < length < 128 characters
//Have at a min 1 from each type:
//  *uppercase
//  *lowercase
//  *numbers
//  *special characters
//validate 
//  *input has at least 1 char from each type
//  *generated pwd matches selected criteria
//  *pwd writes to page for user


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var symbolsArray = ['!@#$%^&*(){}[]=><,.'];

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var num = ['0','1','2','3','4','5','6','7','8','9'];
var sym = getRandomSymbol();

function typeVerify() {
    var upperEl = confirm("Do you want uppercase letters in your password? (click ok for yes, cancel for no)");

    var lowerEl = confirm("Do you want lowercase letters in your password? (click ok for yes, cancel for no)");

    var numberEl = confirm("Do you want numbers in your password? (click ok for yes, cancel for no)");

    var symbolEl = confirm("Do you want symbols in your password? (click ok for yes, cancel for no)");

    if (lowerEl === false &&
        upperEl === false &&
        numberEl === false &&
        symbolEl === false
    ) {
        window.alert("please pick at least one option");
        return typeVerify();
    }
    var totalTypes = {
        lowerEl: lowerEl,
        upperEl: upperEl,
        numberEl: numberEl,
        symbolEl: symbolEl
    };
    return totalTypes;
}
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var lengthEl = prompt("How many characters should your password be? (enter a whole number between 8 and 128");
    var length = parseInt(lengthEl); //convert from string to interger type

    if (8 <= length && length <= 128) {

    } else {
        window.alert("length amount is outside the range of 8-128, please try again");
        generatePassword();
    }

    var passwordArray = [];

    var typeArray = typeVerify();

    if (typeArray.lowerEl === true) {
        passwordArray.push(...lowerCase);
    }

    if (typeArray.upperEl === true) {
        passwordArray.push(...upperCase);
    }
    if (typeArray.numberEl === true) {
        passwordArray.push(...num);
    }
    if (typeArray.symbolEl === true) {
        passwordArray.push(...sym);
    }

    var generate = [];
    for (var i = 0; i < length; i++) {
        generate.push(passwordArray[Math.floor(Math.random()*passwordArray.length)]);
        console.log(generate.join(''));
        console.log(passwordArray);
    }
    return generate.join('');
}





/*function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97)); //generate a random decimal, multiplied by 26 (total number of letters in the alphabet) add 97 to get into the lower case letter range of the character set.
};

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
};

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
};*/

function getRandomSymbol() {
    var symbolsArray = '!@#$%^&*(){}[]=><,.';
    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)];

};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
