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

function generatePassword() {
  // asks the user for the criteria for the password
  var passwordLength = window.prompt("Choose the length of the password between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Choose the length of the password between 8 and 128 characters");
  }
  var uppercasePrompt = window.prompt("Would you like uppercase letters?");
  var lowercasePrompt = window.prompt("Would you like lowercase letters?");
  var numberPrompt = window.prompt("Would you like numerical characters?");
  var specialPrompt = window.prompt("Would you like special characters?");

  var password = "";


  // Goes through each prompt to see which ones were selected
  
  if (uppercasePrompt === 'yes' && lowercasePrompt === 'yes' && numberPrompt === 'yes' === specialPrompt === 'yes') {
          characters = uppercase1.concat(uppercase2, lowercase, numbers, specialChar);
          for (var i = 0; i < passwordLength; i++) {
           var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
          }
          return window.alert("your password is " + password);
        }
        else if (specialPrompt === 'no' && uppercasePrompt ==='yes' && lowercasePrompt === 'yes' && numberPrompt === 'yes') {
          characters = uppercase1.concat(uppercase2, lowercase, numbers);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'no' && uppercasePrompt ==='no' && lowercasePrompt === 'yes' && numberPrompt === 'yes') {
          characters = lowercase.concat(numbers);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'no' && uppercasePrompt ==='no' && lowercasePrompt === 'no' && numberPrompt === 'yes') {
          characters = numbers;
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'yes' && uppercasePrompt ==='no' && lowercasePrompt === 'yes' && numberPrompt === 'yes') {
          characters = specialChar.concat(lowercase, numbers);
          for (var i = 0; i < passwordLength; i++) {
           var  index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'yes' && uppercasePrompt ==='no' && lowercasePrompt === 'no' && numberPrompt === 'yes') {
          characters = specialChar.concat(numbers);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'yes' && uppercasePrompt ==='yes' && lowercasePrompt === 'no' && numberPrompt === 'yes') {
          characters = uppercase1.concat(uppercase2, specialChar, numbers);
          for (var i = 0; i < passwordLength; i++) {
           var  index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'no' && uppercasePrompt ==='yes' && lowercasePrompt === 'no' && numberPrompt === 'yes') {
          characters = uppercase1.concat(uppercase2, numbers);
          for (var i = 0; i < passwordLength; i++) {
           var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'yes' && uppercasePrompt ==='no' && lowercasePrompt === 'no' && numberPrompt === 'no') {
          characters = specialChar;
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'no' && uppercasePrompt ==='no' && lowercasePrompt === 'yes' && numberPrompt === 'no') {
          characters = lowercase;
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else if (specialPrompt === 'no' && uppercasePrompt ==='yes' && lowercasePrompt === 'yes' && numberPrompt === 'no') {
          characters = uppercase1.concat(uppercase2, lowercase);
          for (var i = 0; i < passwordLength; i++) {
            var index = Math.floor(Math.random() * characters.length);
           password += characters[index];
           }
           return window.alert("your password is " + password);
         }
         else {
          window.alert("You must provide at least one criteria for the password");
         }
      }
    
  

 



