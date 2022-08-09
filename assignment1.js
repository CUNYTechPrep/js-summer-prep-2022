function validUsername(username) {
    
    const Char = /^[a-z]/;
    const specialChar = /['!@#$%^&*()-=_+{}\|;':",./<>?`~1"]/;

    if (username.length < 3 || username.length > 10){
        return false;
    } 
    else if(specialChar.test(username)){
        return false;
    }
    else if(!username.startsWith(Char)){
        return false; 
    }
    return true;
}

function validPassword(password){

    const contain = /^[A-Za-z0-9]*$/;
    const specialChar = /['!@#$%^&*()-=_+{}\|;':",./<>?`~1"]/;
    if(password > 10 || password > 64){
        return false;
    }
    else if(!contain.test(password) || !specialChar.test(password) ){
        return false
    }
    return true;
}