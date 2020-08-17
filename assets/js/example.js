//functionality of generating code

//function to get a random lower case number  going to use CharCode to get the codes from the browser characther set.
//codes:  http://www.net-comber.com/charset.html  //Char code set--lowercase letters 97-122; uppercase letters:65-90; numbers:48-57;


//if statement to check whether the length value entered is in the appropriate range.  The statement loops while it is outside the range, then will move to the next once it is within the correct value.


/*if (8 > pwdLengthElement && pwdLengthElement > 128) {

    do {
        pwdLengthElement = confirm("This number is outside the designated range of password lengths, please try your entry again.");

    } while (8 > pwdLengthElement && pwdLengthElement > 128);
//
//else console.log(pwdLengthElement);*/
//
//var passwordElement = document.getElementById("password");  //creating a variable that links to the HTML
//var generateElement = document.getElementById("generate");  //variable that links to the HTML

var pwdPool = "";

var randomFunction = {           //object for all the randomly generated numbers from the functions
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}



var pwdLengthElement = prompt("How many characters should your password be? (enter a whole number between 8 and 128");

var uppercaseElement = confirm("Do you want uppercase letters in your password? (click ok for yes, cancel for no)");

var lowercaseElement = confirm("Do you want lowercase letters in your password? (click ok for yes, cancel for no)");

var numbersElement = confirm("Do you want numbers in your password? (click ok for yes, cancel for no)");

var symbolsElement = confirm("Do you want symbols in your password? (click ok for yes, cancel for no)");


console.log(pwdLengthElement);
console.log(typeof pwdLengthElement);

console.log(symbolsElement);
console.log(numbersElement);
console.log(lowercaseElement);
console.log(uppercaseElement);




// Add event listener to generate button
generateElement.addEventListener("click", () => {

    var length = +pwdLengthElement.value;
    var hasLower = lowercaseElement.true;
    var hasUpper = uppercaseElement.true;
    var hasNumber = numbersElement.true;
    var hasSymbol = symbolsElement.true;

    password.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);


});


function getTypes(hasLower, hasUpper, hasNumber, hasSymbol) {

    var typePool = [];
    var types = "";
    if (hasLower == true) {
        typePool.push(types);
    } else { console.log("false"); }

}



//Generate password function

function generatePassword(lower, upper, number, symbol, length) {
    //1. have a variable to continuously build on including all types that are true
    //2. filter out the types that are false
    //3. loop until length is met and call the function to generate those types
    //4. add final password to the variable and pass it to the form

   

}



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
    var symbolsArray = '!@#$%^&*(){}[]=><,.';
    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
}




//showing what the functions are generating--making sure the functions are writting correctly.

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());


var passwordArray = [];

pwdPool = passwordArray.push(lower, upper, number, symbol);

// var pwdPool = passwordArray.concat(getRandomUpper(), getRandomLower(), getRandomNumber(), getRandomSymbol(),);

for (i = 0; i < pwdLengthElement - 1; i++) {

    pwdPool.push(getRandomUpper(), getRandomLower(), getRandomNumber(), getRandomSymbol(),);

}

console.log(pwdPool);


var generate = pwdPool.slice(pwdPool.length - pwdLengthElement);


console.log(generate);







var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


