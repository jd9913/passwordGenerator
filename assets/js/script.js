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






}
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
