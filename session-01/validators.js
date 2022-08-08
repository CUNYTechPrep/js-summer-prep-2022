/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/


function validUsername(username) {

  if(username===null || username===""){
        console.log("Name can't be blank!");
        return false;
  
  }elseif(username<=3)
  {
    console.log("Username must be AT LEAST 3 characters long!");
    return false;
  
  }elseif(username>=10)
  {
    console.log("Username must be AT MOST 10 characters long!");
   return false;
  }elseif(username==='!','@','#','$','%','^','&','*','(',')','/','<','>','?','{','}','[',']',';',':','"','|')
  {
    console.log("Username cannot contain any special characters only letters and/or numbers!")
    return false;
  }elseif(username !== 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' || username != '0','1','2','3','4','5','6','7','8','9')
  {
    console.log('Username must contain  only letters and/or numbers!')
    return false;
  }
    return true;
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
  }elseif(password<=10)
  {
    console.log("Password must be AT LEAST 10 characters long!");
    return false;
  
  }elseif(password>=64)
  {
  console.log("Password must be AT MOST 64 characters long!");
  return false;
  }elseif(password !== 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' || password != '0','1','2','3','4','5','6','7','8','9' || password!=='!','@','#','$','%','^','&','*','(',')','/','<','>','?','{','}','[',']',';',':','"','|')
    return true;
  }
  
  module.exports = { validUsername, validPassword };
  