// Assignment Code
// Query selectors for generate and password
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for all character choices
var special = "!@#$%^&*()";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write a function that generates a random password in the "text area" box
function writePassword() {
   password.value === "";
   var randomPassword = "";

    // Set prompt and criteria for password length
    var passwordLength = prompt("Select a password length between 8 and 128 characters.");
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Error--Password length must be between 8 and 128 characters!");
        var passwordLength = prompt("Select a password length between 8 and 128 characters.");
  }

    // Set choices and restrictions for character selectors
    var lowercaseLett = confirm("Should the password contain lowercase letters?");
    var uppercaseLett = confirm("Should the password contain uppercase letters?");
    var num = confirm("Should the password contain numbers?");
    var specialChar = confirm("Should the password contain special characters?");
      if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
        alert("Error--Password must contain at least one character selector criteria!");
        var lowercaseLett = confirm("Should the password contain lowercase letters?");
        var uppercaseLett = confirm("Should the password contain uppercase letters?");
        var num = confirm("Should the password contain numbers?");
        var specialChar = confirm("Should the password contain special characters?");
  }

      // Use the character selectors selected to generate password
    if (lowercaseLett) {
        optionsVariable += lowercase;
    }

    if (uppercaseLett) {
        optionsVariable += uppercase;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += special;
    }

    // Generates a random password from user criteria for character selectors and length
    for (var i = 0; i < passwordLength; i++) {
        
      // Ensures length of password
        randomPassword += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomPassword;

}
