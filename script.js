// Assignment Code
var generateBtn = document.querySelector("#generate");

// A function to get the password
function generatePassword() {
  // Password variables for usable characters
  var characterTypes = [
    { name: "uppercase letters", characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", include: false },
    { name: "lowercase letters", characters: "abcdefghijklmnopqrstuvwxyz", include: false },
    { name: "numbers", characters: "0123456789", include: false },
    { name: "special characters", characters: "!@#$%^&*()-=+<>?/|':[]{}", include: false }
  ];
  var multiSelect = "";
  var password = "";

  //Initial prompt to allow user to select length of password
  var keyLength = prompt("How long would you like your password to be?");

  // If statement that redirects user to enter a usable character length
  if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
    alert(
      "Your password must be between 8 and 128 characters given as a numerical value. Enter another number please."
    );
    return;
  } else {
    // Prompt the user to select character types
    characterTypes.forEach(function (type) {
      type.include = confirm("Would you like your password to contain " + type.name + "?");
      if (type.include) {
        multiSelect += type.characters;
      }
    });
  }

  // Check if any character types are selected
  var selectedTypesCount = characterTypes.filter(function (type) {
    return type.include;
  }).length;

  if (selectedTypesCount === 0) {
    password = "Not enough character types were selected, please try again and select more options.";
  } else {
    // Generate the password
    for (var i = 0; i < keyLength; i++) {
      password += multiSelect[Math.floor(Math.random() * multiSelect.length)];
    }
  }

  return password;
}

function writePassword() {
  var password = generatePassword();

  if (!password) {
    return; // Cancel password writing if generation is not successful
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // A function to get the password
// function generatePassword() {
//   // Password variables for usable characters
//   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//   var numeric = "0123456789";
//   var special = "!@#$%^&*()-=+<>?/|':[]{}";
//   var multiSelect = "";
//   var password = "";
//   var selectedTypesCount = 0;

//   //Initial prompt to allow user to select length of password
//   var keyLength = prompt("How long would you like your password to be?");

//   // If statement that redirects user to enter a usable character length
//   if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
//     alert(
//       "Your password must be between 8 and 128 characters given as a numerical value. Enter another number please."
//     );
//     return;
//   } else {
//     var confirmUpper = confirm(
//       "Would you like your password to contain uppercase letters?"
//     );
//     var confirmLower = confirm(
//       "Would you like your password to contain lowercase letters?"
//     );
//     var confirmNum = confirm("Would you like your password to contain numbers?");
//     var specialChar = confirm(
//       "Would you like your password to contain special characters?"
//     );
//   }

//   if (confirmUpper) {
//     multiSelect += upperCase;
//     selectedTypesCount++;
//   }
//   if (confirmLower) {
//     multiSelect += lowerCase;
//     selectedTypesCount++;
//   }
//   if (confirmNum) {
//     multiSelect += numeric;
//     selectedTypesCount++;
//   }
//   if (specialChar) {
//     multiSelect += special;
//     selectedTypesCount++;
//   }

//   // For loop to repeat if criteria is not met and will end once password is generated.
//   for (i = 0; i < keyLength; i++) {
//     // Final random password has generated
//     password += multiSelect[Math.floor(Math.random() * multiSelect.length)];
//   }

//   if (selectedTypesCount === 0) {
//     password = "Not enough characters selected, please try again";
//   }

//   return password;
// }

// function writePassword() {
//   var password = generatePassword();

//   if (!password) {
//     return; // Cancel password writing if generation is not successful
//   }

//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);











// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // A function to get the password
//   function generatePassword() {
    
// // Password variables for usable characters
//     var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var lowerCase = "abcdefghijklmnopqrstuvwxyz"
//     var numeric = "0123456789"
//     var special = "!@#$%^&*()-=+<>?/|':[]{}"
//     var multiSelect = "";
//     var password = "";

// //Initial prompt to allow user to select length of password
//     var keyLength = prompt(
//         "How long would you like your password to be?"
//     );
    
// // If statement that redirects user to enter a usable character length
//     if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
//         alert("Your password must be between 8 and 128 characters given as a numerical value. Enter another number please.");        
//         return;

// // Prompts for the use of Upper, Lower, Numbers, and Special Characters.

//     } else {
//     var confirmUpper = confirm("Would you lke your password to contain uppercase letters?");
//     var confirmLower = confirm("Would you lke your password to contain lowercase letters?");
//     var confirmNum = confirm("Would you lke your password to contain numbers?");
//     var specialChar = confirm("Would you like your password to contain special characters?");
//     }

//     if (confirmUpper) {multiSelect += upperCase;}
//     if (confirmLower) {multiSelect += lowerCase;}
//     if (confirmNum) {multiSelect += numeric;}
//     if (specialChar) {multiSelect += special;}

// // For loop to repeat if criteria is not met and will end once password is generated. 
//     for (i = 0; i < keyLength; i++) {

// // Final random password has generated
//         password += multiSelect[Math.floor(Math.random() * multiSelect.length)]
//     }
//     return(password);
    
// }


// function writePassword() {
//   var password = generatePassword();


//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);