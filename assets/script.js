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

// Variables for password criteria
var random = "";
var minLength = 8;
var maxLength = 128;
var uppercase1 = ["A","B","C","D","E","F","G","H","I","J"];
var uppercase2 = ["K","L","M","N","O","P","Q","R","S","Y","X","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","y","x","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","-","_","=","+"];

var characters = [];

// Function to generate a password between 8 to 12 characters and tailored to the users criteria 
function generatePassword() {
  // asks the user for the criteria for the password
  var passwordLength = window.prompt("Choose the length of the password between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    return;
  }
  var uppercasePrompt = window.confirm("Would you like uppercase letters?");
  var lowercasePrompt = window.confirm("Would you like lowercase letters?");
  var numberPrompt = window.confirm("Would you like numerical characters?");
  var specialPrompt = window.confirm("Would you like special characters?");

  var password = "";


  // Goes through each prompt to see which ones were selected
  
  // All true
  if (uppercasePrompt === true && lowercasePrompt === true && numberPrompt === true && specialPrompt === true) {
          characters = uppercase1.concat(uppercase2, lowercase, numbers, specialChar);
          for (var i = 0; i < passwordLength; i++) {
           var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
          }
          return password;
        }
        // No special
        else if (specialPrompt === false && uppercasePrompt === true && lowercasePrompt === true && numberPrompt === true) {
          characters = uppercase1.concat(uppercase2, lowercase, numbers);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // No special or uppercase
         else if (specialPrompt === false && uppercasePrompt === false && lowercasePrompt === true && numberPrompt === true) {
          characters = lowercase.concat(numbers);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // No uppercase or lowercase
         else if (specialPrompt === true && uppercasePrompt === false && lowercasePrompt === false && numberPrompt === true) {
          characters = numbers;
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // No uppercase
         else if (specialPrompt === true && uppercasePrompt === false && lowercasePrompt === true && numberPrompt === true) {
          characters = specialChar.concat(lowercase, numbers);
          for (var i = 0; i < passwordLength; i++) {
           var  index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // No lowercase or number
         else if (specialPrompt === true && uppercasePrompt === true && lowercasePrompt === false && numberPrompt === false) {
          characters = specialChar.concat(numbers);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // No lowercase
         else if (specialPrompt === true && uppercasePrompt === true && lowercasePrompt === false && numberPrompt === true) {
          characters = uppercase1.concat(uppercase2, specialChar, numbers);
          for (var i = 0; i < passwordLength; i++) {
           var  index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
        // No special or lowercase
         else if (specialPrompt === false && uppercasePrompt === true && lowercasePrompt === false && numberPrompt === true) {
          characters = uppercase1.concat(uppercase2, numbers);
          for (var i = 0; i < passwordLength; i++) {
           var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         } 
         // Only special
         else if (specialPrompt === true && uppercasePrompt === false && lowercasePrompt === false && numberPrompt === false) {
          characters = specialChar;
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         } 
         // Only lowercase
         else if (specialPrompt === false && uppercasePrompt === false && lowercasePrompt === true && numberPrompt === false) {
          characters = lowercase;
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // No special or number
         else if (specialPrompt === false && uppercasePrompt === true && lowercasePrompt === true && numberPrompt === false) {
          characters = uppercase1.concat(uppercase2, lowercase);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // Only number
         else if (specialPrompt === false && uppercasePrompt === false && lowercasePrompt === false && numberPrompt === true) {
          characters = numbers;
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         // Only uppercase
         else if (specialPrompt === false && uppercasePrompt === true && lowercasePrompt === false && numberPrompt === false) {
          characters = uppercase1.concat(uppercase2);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return password;
         }
         else {
         window.alert("You must provide at least one criteria for the password");
         }
      }
    
  

 



