// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for each type of character
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericChars = "0123456789".split("");
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

// Function to generate password
function generatePassword() {
  var passwordLength = prompt("Enter password length (must be between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);
  
  // Validate password length input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length! Password length must be between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Invalid input! You must select at least one character type.");
    return "";
  }

  var passwordChars = [];

  if (includeLowercase) {
    passwordChars = passwordChars.concat(lowercaseChars);
  }

  if (includeUppercase) {
    passwordChars = passwordChars.concat(uppercaseChars);
  }

  if (includeNumeric) {
    passwordChars = passwordChars.concat(numericChars);
  }

  if (includeSpecial) {
    passwordChars = passwordChars.concat(specialChars);
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
