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

function generatePassword() {
  // Creating a prompt to determine password length
  passBool = false;
  while(passBool == false) {
    var passLength = prompt("Enter the length of the password. Note: The password length should be between 8 and 128 characters.");
    // Checking if user did not follow specified instructions
    if(passLength < 8 || passLength > 128) {
    alert("The input values falls outside the specified range. Please enter a length between 8 and 128.")
    }
    else {
      passBool = true;
    }
  }
}