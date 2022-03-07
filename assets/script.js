// Assignment code here
// Password Character Variables
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbolChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[',']', '{', '}', '|', '?', '/', '<', '>'];

// Accepted inputs combined into full array
var choiceArray = [];

//prompt user to input how long they want their password to be
var generatePassword = function() {
  choiceArray = [];

  var passwordLength = "";
    while (passwordLength === "" || passwordLength === null)  {
    passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));
    
    // validate prompt answer
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be a number between 8 and 128 digits in length. Please try again.");
      // use return to call it again and stop the rest of this function from running
      return generatePassword();
    } else {
      console.log(passwordLength);
    }

    // ask if user would like to include lowercase letters
    var lowercaseConfirm = window.confirm("Would you like to have lowercase letters in your password?");

    if (lowercaseConfirm) {
      // adds lowerCase array to choiceArray
      choiceArray = choiceArray.concat(lowerCase);
    }

    // ask if user would like to include upper case letters
    var uppercaseConfirm = window.confirm("Would you like to have UPPERCASE letters in your password?");

    if (uppercaseConfirm) {
      // adds upperCase array to choiceArray
      choiceArray = choiceArray.concat(upperCase);
    }

    // ask if user would like to include numerical values
    var numericalConfirm = window.confirm("Would you like to have numbers in your password?");

    if (numericalConfirm) {
      // adds numberChar array to choiceArray
      choiceArray = choiceArray.concat(numberChar);
    }

    //ask if user would like to include special characters
    var specialCharConfirm = window.confirm("Would you like to have special characters in your password?");

    if (specialCharConfirm) {
      // adds symbolChar array to choiceArray
      choiceArray = choiceArray.concat(symbolChar);
    }
    else {
      return generatePassword();
    }
  }

  // generate password
  var password = "";
  // add new character to passwordLength by looping over them and adding them until the password is complete
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }

  //return password to global
  return password;
};

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