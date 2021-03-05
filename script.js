// Accepted characters
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersStr = "0123456789";
var specialStr = "!()?[]`~;:!@#$%^&*+=";

// criteria variables:
var userLength = "";
var userCriteriaString = "";
var userLower = "";
var userUpper = "";
var userNumbers = "";
var userSpecial = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// listen for click event to start writePassword function

generateBtn.addEventListener("click", writePassword);

// Asks computer to write password prompting user for Input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  };

// userLengthFunc makes sure the user has provided a number value
function userLengthFunc(){
  userLength = prompt("Please enter password length, password needs to be from 8 to 128 characters long:");
  userLength = parseInt(userLength);
  return userLength
  };

// check for password length:
function generatePassword() {

  while(isNaN(userLength) || userLength < 8 || userLength > 128){
  alert("Password needs to be a number between 8 and 128 characters.")  
  userLengthFunc();
  };

  

// check for password criteria via prompts and conditionals to ensure entered answer is Y or N

  userLower = confirm ("Would you like to include Lowercase characters?");  
  userUpper = confirm ("Would you like to include Uppercase characters?");
  userNumbers = confirm ("Would you like to include Numbers?");
  userSpecial = confirm ("Would you like to include Special characters?");

  console.log(userLower);
  console.log(userUpper);
  console.log(userNumbers);
  console.log(userSpecial);


  // concatenate password string for character randomization
      if (userLower) {
        userCriteriaString += lowerCaseStr
      };
      console.log(userLower);
      if (userUpper) {
        userCriteriaString = userCriteriaString + upperCaseStr
      };
      console.log(userUpper);
      if (userNumbers) {
        userCriteriaString = userCriteriaString + numbersStr
      };
      console.log(userNumbers);
      if (userSpecial) {
        userCriteriaString = userCriteriaString + specialStr
      };


console.log(userCriteriaString);

// string is then turned into array

  var userCriteriaArr = [];
  userCriteriaArr = Array.from(userCriteriaString);
  console.log(userCriteriaArr);
    
// if user did not select any criteria then process will restart
      if (userCriteriaString === "") {
        window.alert("Please select at least one character type! Press Ok to Restart");
        location.reload;
      }

// loop that will generate password based on two parameters already stored within variables, length and userCriteriaArr

var generatedPassword = "";

      for(var i = 0; i < userLength; i++) {
      var x = Math.floor(Math.random() * userCriteriaArr.length);
      generatedPassword += userCriteriaArr[x]

      }
    console.log(generatedPassword);

      return generatedPassword;
};

userLengthFunc();
writePassword();