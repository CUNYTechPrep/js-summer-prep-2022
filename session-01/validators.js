/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

//helper functions

//check length
function lengthOf( username)
{
 if (username.length >= 3 && username.length <= 10) {return true};

  return false;
}

// check first letter
function firstLetter(username)
{
  let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","K","J","M","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
             for(let i = 0; i< alphabet.length;i++)
             {
              if(alphabet[i]===username[0]) {return true};
             }

   return false;
}

//check for special chars
function alphaNumeric(username){
  let counter = 0
  let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","K","J","M","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];


    for(let i = 0 ; i < username.length; i++)
    {
      for(let j = 0; j < alphabet.length; j++)
      {
        if(username[i] === alphabet[j]) { counter++};
      }
    }
    if(counter === username.length){return true;}

    return false;
}


function validUsername(username) {

    if (lengthOf(username)===false){return false};
    if (firstLetter(username)===false) {return false};
    if (alphaNumeric(username)===false){return false};

  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/


//helper functions
//check password length
function lengthOfPassword(password)
{
  if ( password.length > 9 && password.length < 65 ) {return true};

  return false;
}

//check that there is at least 1 of each type of chars
function charactersOf(password)
{
  let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","K","J","M","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let numbers = ["0","1","2","3","4","5","6","7","8","9"];

  let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","K","J","M","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]


  let flag1 = false;
  let flag2 = false;
  let flag3 = true;
  
//for letters
for(let j = 0; j < password.length;j++ )
{
  for(let i = 0 ; i < letters.length; i++)
  {
    if(password[j]===letters[i]){flag1= true;} 
  }
}

//for numbers
for(let j = 0; j < password.length;j++)
{
  for(let i = 0 ; i < numbers.length; i++)
  {
    if(password[j]===numbers[i]) {flag2 = true};
  }
}

let counter = 0;
//for special chars
for(let j = 0; j < password.length;j++) 
{
  for(let i = 0 ; i < alphabet.length; i++)
  {
    if(password[j] === alphabet[i]){counter++;} 
  }
  if(counter === password.length){ flag3 = false;}
}

if( flag1 === true && flag2 === true && flag3 === true){return true;}

return false;
}

function validPassword(password) {

 if(lengthOfPassword(password) === false) { return false};
 if(charactersOf(password) === false) {return false};

  return true;
}

module.exports = { validUsername, validPassword };
