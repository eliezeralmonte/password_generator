// Accepted characters
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersStr = "0123456789";
var specialStr = "!()?[]`~;:!@#$%^&*+=";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// listen for click event to start writePassword function
generateBtn.addEventListener("click", writePassword);

// Asks computer to write password prompting user for Input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

// check for password length:

function generatePassword() {

// criteria variables:

  var userLength = ""; // value stored in this variable needs to be a number
  var userCriteriaString = ""; // the value in this variable will be a concatenated string
  var userLower = ""; // value stored in this variable needs to be Y or N
  var userUpper = ""; // value stored in this variable needs to be Y or N
  var userNumbers = ""; // value stored in this variable needs to be Y or N
  var userSpecial = ""; // value stored in this variable needs to be Y or N

  userLength = prompt("Please enter password length, password needs to be from 8 to 128 characters long:");
  userLength = parseInt(userLength);
  console.log(userLength);
  console.log(typeof userLength);
  
// check for password criteria and concatenate password string for character randomization

    userLower = prompt("Would you like to include Lowercase characters?, \n\nPlease reply with Y for Yes or N for No");
    userUpper = prompt("Would you like to include Uppercase characters?, \n\nPlease reply with Y for Yes or N for No");
    userNumbers = prompt("Would you like to include Numbers?, \n\nPlease reply with Y for Yes or N for No");
    userSpecial = prompt("Would you like to include Special characters?, \n\nPlease reply with Y for Yes or N for No");

      if (userLower === "Y") {
        userCriteriaString += lowerCaseStr
      };
      console.log(userLower);
      if (userUpper === "Y") {
        userCriteriaString = userCriteriaString + upperCaseStr
      };
      console.log(userUpper);
      if (userNumbers === "Y") {
        userCriteriaString = userCriteriaString + numbersStr
      };
      console.log(userNumbers);
      if (userSpecial === "Y") {
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
  }

writePassword();

// randomizer
//   var index = Math.floor(Math.random() * options.length);

// methods

// var userChoice = window.prompt("Enter R, P, or S:");
// window.alert("The computer chose " + computerChoice);