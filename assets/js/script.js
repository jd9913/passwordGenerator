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

console.log(uppercase); //testing whether arrays have been generated correctly and are complete
console.log(lowercase);
console.log(numbers);
console.log(specChar);


//prompt for user to enter desired length of password
var pwdlength = window.prompt("How many total characters do you need your password to be (enter whole number between 8 and 128)");

for (var i = 0; i = pwdlength; i++) {

}

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
