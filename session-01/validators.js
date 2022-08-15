/* 1.

  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

// required function 1
function validUsername(username){   

  let len = username.length;    // storing the length of "username" in "len"
  if(len < 3 || len > 10){     // checking if the "username" is within the length bounds
      return false;           // and returning false, if not
  }
  

  
  // the first character of "username" must be an alphabet. 
  if(!(username[0]>="a" && username[0]<="z")  &&   !(username[0]>="A" && username[0]<="Z") )     
      return false;        // and returning false, if not
 

  
  // the "username" must NOT contain any special characters
  //username may contain numbers and letters
  
  for(let i=1; i<len; i++){

    let letter = username[i];
    if(letter[0]>="a" && letter[0]<="z")  continue;
    if(letter[0]>="A" && letter[0]<="Z")  continue;
    if(letter[0]>="0" && letter[0]<="9")  continue;
    return false;

  }
  

  // returning true
  // this return statement would only execute when all the conditions are met.
  // otherwise, the other return statements would return false
  return true;


}




/* 2. 

  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/

function validPassword(password) {       //password must be between (and including) 10-64 characters in length
  if (password.length <10 || password.length <64 ) return false;








}

















module.exports = { validUsername, validPassword };



