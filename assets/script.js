// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//TO DO variables for password type groups: uppercase, lowercase, numbers, special chars

//function to test all parameters; if all are false then restart

//Function to parses password length input and test 8 - 128

//TO DO function to loop loop through password type group prompts

//TO DO function to loop through password type groups

//TO DO sub functions to test for uppercase, lowercase, numbers, special chars

//TO DO function to generate password

//Function to get random special characters;
//Function to get random numbers,
//Function to get random lowercase chars,
//Function to get random uppercase chars,

//Function to chech length of each
