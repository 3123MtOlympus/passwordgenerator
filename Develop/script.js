// Assignment code here
// Function to prompt user for password criteria
function getPasswordCriteria() {
    const criteria = {
      length: 0,
      lowerCase: false,
      upperCase: false,
      numeric: false,
      specialChars: false,
    };
  
    // Prompt for password length
    do {
      criteria.length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));
    } while (isNaN(criteria.length) || criteria.length < 8 || criteria.length > 128);
  
    // Prompt for character types to include
    criteria.lowerCase = confirm("Include lowercase characters?");
    criteria.upperCase = confirm("Include uppercase characters?");
    criteria.numeric = confirm("Include numeric characters?");
    criteria.specialChars = confirm("Include special characters?");
  
    // Validate that at least one character type is selected
    if (!criteria.lowerCase && !criteria.upperCase && !criteria.numeric && !criteria.specialChars) {
      alert("At least one character type should be selected.");
      return getPasswordCriteria();
    }
  
    return criteria;
  }
  
  // Function to generate a random password based on selected criteria
  function generatePassword() {
    const criteria = getPasswordCriteria();
  
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialCharsList = "!@#$%^&*()_-+=<>?/{}[]";
  
    let allowedChars = "";
    if (criteria.lowerCase) allowedChars += lowerCaseChars;
    if (criteria.upperCase) allowedChars += upperCaseChars;
    if (criteria.numeric) allowedChars += numericChars;
    if (criteria.specialChars) allowedChars += specialCharsList;
  
    let password = "";
    for (let i = 0; i < criteria.length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Event listener for the "Generate Password" button
  document.getElementById("generate").addEventListener("click", () => {
    const generatedPassword = generatePassword();
    document.getElementById("password").value = generatedPassword;
  });
  
  

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