//functionality of generating code

//function to get a random lower case number  going to use CharCode to get the codes from the browser characther set.
//codes:  http://www.net-comber.com/charset.html  //Char code set--lowercase letters 97-122; uppercase letters:65-90; numbers:48-57;

var pwdLengthElement = prompt("How many characters should your password be? (enter a whole number between 8 and 128");
console.log(pwdLengthElement);
console.log(typeof pwdLengthElement);

//if statement to check whether the length value entered is in the appropriate range.  The statement loops while it is outside the range, then will move to the next once it is within the correct value.

if (8 > pwdLengthElement && pwdLengthElement < 128) {

    do 
        pwdLengthElement = prompt("This number is outside the designated range of password lengths, please try your entry again.").toLowerCase;

        while (8 > pwdLengthElement && pwdLengthElement < 128);
    

}else console.log(pwdLengthElement);
    
 
var uppercaseElement = prompt("Do you want uppercase letters in your password? (enter y or n)");
/*if (uppercaseElement !=="y" && uppercaseElement!== "n") {

    do
        uppercaseElement = prompt("This is not a y or n, please try your entry again.").toLowerCase;

    while (uppercaseElement == "y" && uppercaseElement == "n");

   
} else */console.log(uppercaseElement);

var lowercaseElement = prompt("Do you want lowercase letters in your password? (enter y or n)");
/*if (lowercaseElement !== "y" && lowercaseElement !== "n") {

    do
        lowercaseElement = prompt("This is not a y or n, please try your entry again.").toLowerCase;

    while (lowercaseElement !== "y" && lowercaseElement !== "n");


} else */ console.log(lowercaseElement);

var numbersElement = prompt("Do you want numbers in your password? (enter y or n)");
/*if (numbersElement !== "y" && numbersElement !== "n") {

    do
        numbersElement = prompt("This is not a y or n, please try your entry again.").toLowerCase;

    while (numbersElement !== "y" && numbersElement !== "n");


} else */ console.log(numbersElement);

var symbolsElement = prompt("Do you want symbols in your password? (enter y or n)");
/*if (symbolsElement !== "y" && symbolsElement !== "n") {

    do
        symbolsElement = prompt("This is not a y or n, please try your entry again.").toLowerCase;

    while (symbolsElement !== "y" && symbolsElement !== "n");


} else */ console.log(symbolsElement);

var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ">", ",", "."];



//Functions to generate random characters from the 4 types of characters



function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97)); //generate a random decimal, multiplied by 26 (total number of letters in the alphabet) add 97 to get into the lower case letter range of the character set.
    }

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
}

function getRandomSymbol() {
    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
}


//showing what the functions are generating--making sure the functions are writting correctly.

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());




function generatePassword() {
    



    
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword(getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
