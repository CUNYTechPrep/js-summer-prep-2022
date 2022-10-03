/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
	if (username.length < 3 || username.length > 10) {
		return false;
	}
	// match returns null if no matches were found <- falsy

	// if the username does not start with a letter return false
	if (!username[0].match(/[a-z]/i)) return false;
	// if the username does not only contain letters and numbers return false
	if (!username.match(/^[A-Z0-9]*$/i)) return false;
	// if the username contains any special characters (non-letters/non-numbers) return false
	if (username.match(/[^A-Z0-9]/i)) return false;

	// return true otherwise
	return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
	if (password.length < 10 || password.length > 64) return false;

	// if no letters were found, return false
	if (!password.match(/[a-z]/i)) return false;
	// if no numbers were found, return false
	if (!password.match(/[0-9]/)) return false;
	// if no special characters were found, return false
	if (!password.match(/[^a-z0-9]/i)) return false;

	// return true otherwise
	return true;
}

module.exports = { validUsername, validPassword };
