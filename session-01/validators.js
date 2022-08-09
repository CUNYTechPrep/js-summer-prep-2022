/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

//Function to detect a special character in the username
function hasSpecialCharacter(username){
  const array = ['!','@','#','$','%','^','&','*','(',')','/','<','>','?','{','}','[',']',';',':','"','|'];
  for(let i =0; i<username.length; i++){
    for(let n =0; n<array.length; n++){
      if(array[n]===username[i]){
        return true;
      }
    }
  }
  return false;
}

//Function to detect a letter in username
function hasLetter(username){
  const array2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for(let i =0; i<username.length; i++){
    for(let n =0; n<array2.length; n++){
      if(array2[n]===username[i]){
        return true;
      }
    }
  }
  return false;
}

//Function to detect if username has numbers
function hasNumbers(username){
  const array3 = ['0','1','2','3','4','5','6','7','8','9'];
  for(let i =0; i<username.length; i++){
    for(let n =0; n<array2.length; n++){
      if(array3[n]===username[i]){
        return true;
      }
    }
  }
  return false;
}

//Function to detect if first letter is a letter in username
function firstIsLetter(username){
  const array4 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  for(let i =0; i<username.length; i++){
    if(array3[0]===username[i]){
        return true;
    }
    
  }
return false;
}

//---------------------------------------------------------------------

function validUsername(username) {

  if(username===null || username===""){
        console.log("Name can't be blank!");
        return false;
  
  }else if(username.length<3 || username.length>10)
  {
    console.log("Username must be between 3-10 characters long!");
    return false;
  
  }else if(hasSpecialCharacter(username))
  {
    console.log("Username cannot contain any special characters only letters and/or numbers!")

  }else if(hasLetter(username))
  {
    console.log('Username must contain letters!') 

  }else if(hasNumbers){
    console.log('Username must contain numbers!')

  }else if(firstIsLetter){
    console.log('First character must be a letter!')

  }
    return true;
  }

//Function to detect special char, letter, and number in the password
  function hasLetterSpecCharNumber(password){
    function hasSpecialCharacter(password){
      const array5 = ['!','@','#','$','%','^','&','*','(',')','/','<','>','?','{','}','[',']',';',':','"','|'];
      for(let i =0; i<[password].length; i++){
        for(let n =0; n<array5.length; n++){
          if(array5[n]===password[i]){
            return true;
          }
        }
      }
      return false;
      
  }
  function hasLetter(password){
    const array6 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i =0; i<password.length; i++){
      for(let n =0; n<array6.length; n++){
        if(array6[n]===password[i]){
          return true;
        }
      }
    }
    return false;
  }
  function hasNumbers(password){
    const array7 = ['0','1','2','3','4','5','6','7','8','9'];
    for(let i =0; i<password.length; i++){
      for(let n =0; n<array7.length; n++){
        if(array7[n]===password[i]){
          return true;
        }
      }
    }
    return false;
  }
}
  
  /*
    Write a function that returns true or false if the given password
    is valid according to the following rules:
    - password must be between (and including) 10-64 characters in length
    - password must contain at least 1 letter, 1 number, and 1 special character
  */
  function validPassword(password) {
  
    if(password===null || password===""){
      console.log("Password can't be blank!");
      return false;
  }else if(password<=10)
  {
    console.log("Password must be AT LEAST 10 characters long!");
    return false;
  
  }else if(password>=64)
  {
  console.log("Password must be AT MOST 64 characters long!");
  return false;
  }else if(password !== 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' || password != '0','1','2','3','4','5','6','7','8','9' || password!=='!','@','#','$','%','^','&','*','(',')','/','<','>','?','{','}','[',']',';',':','"','|')
    return true;
  }
  
  module.exports = { validUsername, validPassword };
