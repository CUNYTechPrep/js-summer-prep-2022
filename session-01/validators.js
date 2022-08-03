/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
	// Check if username is between 3-10 characters in length
	if (username.length < 3 || username.length > 10) {
		return false
	}
	
	// Check if username begins with a letter
	if (!(/[a-zA-Z]/).test(username.charAt(0))) {
		return false
	}

	// Check if username contains special characters
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
	
	if (specialChars.test(username)) {
		return false
	}

	return true
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {

	const alnum = /\w/
	const allowedCharacters = /(?=.*[a-z][A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/
	
	// Check if password is between 10-64 characters in length
        if (password.length > 9 && password.length < 65) {
		// Check if password contains at least 1 letter, 1 number, and 1 special character
		if (allowedCharacters.test(password)) {
			// Check if password contains letters and numbers, not only special characters
			if (alnum.test(password)) {
				return true
			}
		}
        }


	return false
	
}

module.exports = { validUsername, validPassword };
