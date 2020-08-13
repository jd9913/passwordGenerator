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

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specChar = ["!","@","#","$","%","^","&","*","-","_"];

var allChar = uppercase + lowercase + numbers + specChar;

console.log(uppercase); //testing whether arrays have been generated correctly and are complete
console.log(lowercase);
console.log(numbers);
console.log(specChar);
console.log(allChar);


//prompt for user to enter desired length of password
var pwdlength = window.prompt("How many total characters do you need your password to be (enter whole number between 8 and 128)");

if (pwdlength < 128) {
    if (pwdlength > 8) {
        pwdlength = pwdlength;
    }
} else {
    window.alert("please enter a whole number between 8 and 128");
} 



//prompt for different character types

/*var upperType = window.prompt(" do you need uppercase letters in your password? (type y or n)");
var lowerType = window.prompt("do you need lowercase letters in your password? (type y or n)");
var numType = window.prompt("do you need numbers in your password? (type y or n)");
var specType = window.prompt("do you need special characters in your password? (type y or n)");*/


if (upperType = "y" || "Y") {
    pwdArray += Math.floor(Math.random(uppercase) * 10) + 1; //will pull a ranodm number.  Need to tell script to use that number as index number for the array and to put the associated array value into the variable
} else if (lowerType = "y" || "Y") {
    pwdArray += Math.floor(Math.random(lowercase) * 10) + 1;
} else if (numType = "y" || "Y") {
    pwdArray += Math.floor(Math.random(numbers) * 10) + 1;
} else if (specChar = "y" || "Y") {
    pwdArray += Math.floor(Math.random(specChar) * 10) + 1;
} else
    window.alert("You must choose at least one type to proceed");



//function to get the user defined length of the array

function randUpper(uppercase) {
   pwdArray += Math.floor(Math.random(uppercase) * pwdlength) +1;
}

function randLower(lowercase) {
    pwdArray += Math.floor(Math.random(lowercase) * pwdlength) + 1;
}

function randNum(numbers) {
    pwdArray += Math.floor(Math.random(numbers) * pwdlength) + 1;
}

function randSpec(specChar) {
    pwdArray += Math.floor(Math.random(specChar) * pwdlength) + 1;
}



function pwdArray() {


    var pwdArray = "";  //array to store random variables from each category where the user answers y to prompt
    
    if (upperType = "y") {
        pwdArray = randUpper;
    } else if (lowerType = "y") {
        pwdArray = pwdArray - lowercase;
    } else if (numType = "n") {
        pwdArray = pwdArray - numbers;
    } else if (specType = "n") {
        pwdArray = pwdArray - specChar;
    } else
       return pwdArray;
}

function generate(pwdArray) {
    debugger
      
    for (var i = pwdlength - 1; i > 0;  i++) { //specifies that the for statement should iterate  values only as big as the user prompted password length
       generate += pwdArray.charAt(Math.floor(Math.random() * pwdlength)); //uses the math function to pick psudeo random characters from the pwdArray x number of times
    }
}
console.log(pwdArray);  //see value in pwdArray
console.log(generate);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
