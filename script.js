// Password Character Variables
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbolChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[',']', '{', '}', '|', '?', '/', '<', '>'];
var passwordLength = "";
var choiceArray = [];

// generate password code
var generatePassword = function() {
  
  
}

//prompt user to input how long they want their password to be
var getPrompts = function() {
    while (passwordLength === "" || passwordLength === null)  {
    passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));
    
    // validate prompt answer
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be a number between 8 and 128 digits in length. Please try again.");
      // use return to call it again and stop the rest of this function from running
      return getPrompts();
    }

    // ask if user would like to include lowercase letters
    var lowercaseConfirm = window.confirm("Would you like to have lowercase letters in your password?");

    if (lowercaseConfirm) {
      choiceArray = choiceArray.concat(lowerCase);
    }

    // ask if user would like to include upper case letters
    var uppercaseConfirm = window.confirm("Would you like to have UPPERCASE letters in your password?");

    if (uppercaseConfirm) {
      choiceArray = choiceArray.concat(upperCase);
    }
  }
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



//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page