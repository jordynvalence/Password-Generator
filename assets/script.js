// Assignment Code
var generateBtn = document.querySelector("#generate");
var result = '';
var characters = '';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var numberChar = '1234567890';
var specialChar = '!@#$%^&*()-_=+';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// draws uppercase characters
function isUpperChar() {
  uppercharacters = window.confirm("Would you like to include uppercase letters?");
    if (uppercharacters == true) {
      return upperChar;
    }
    else {
      return '';
    } 
    
  }



// draws lowercase characters
function islowerChar() {
  uppercharacters = window.confirm("Would you like to include lowercase letters?");
    if (uppercharacters == true) {
      return lowerChar;
    }
    else {
      return '';
    } 
    
    }



// draws numbers
function isnumChar() {
  uppercharacters = window.confirm("Would you like to include numbers?");
    if (uppercharacters == true) {
      return numberChar;
    }
    else {
      return '';
    } 
    }


// Draws special characters
function isspecialChar() {
  uppercharacters = window.confirm("Would you like to include special characters?");
    if (uppercharacters == true) {
      return specialChar;
    }
    else {
      return ''
    } 
    }



function generatePassword(){
  // sets the characters back to 0 after re using the generator.
  characters =''
  passwordLength = window.prompt("Please enter password length.( Must be between 8 and 128 Characters");
  var value = ('');
  characters += isUpperChar();
  characters += islowerChar();
  characters += isnumChar();
  characters += isspecialChar();


  for (var i = 0; i < passwordLength; i++) {
  value  += characters.charAt(Math.floor(Math.random() * characters.length));
    console.log(i);
  }
  return value;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
