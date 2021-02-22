// Accepted characters
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersStr = "0123456789";
var specialStr = "!()?[]`~;:!@#$%^&*+=";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Asks computer to write password based on user Input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// check for password length:

function generatePassword() {
  var userLength = window.prompt("Please enter password length, password needs to be from 8 to 128 characters long:");
    if(isNaN(userLength)) {
      window.alert("Hey! - Input needs to be a number! ^_^'")
    } else if (userLength<8 || userLength>128) {
      window.alert("Password length needs to be 8 to 128 characters, please enter a valid number")
    ;} else { location.reload
    }
 
// check for password criteria:
    var userPassword = window.prompt("Would you like to include lowercase?")

}
    

writePassword();






// randomizer
//   var index = Math.floor(Math.random() * options.length);

// methods

// var userChoice = window.prompt("Enter R, P, or S:");
// window.alert("The computer chose " + computerChoice);