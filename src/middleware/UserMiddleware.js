const {User} = require("../models/UserModel");

// Checks all user fields have been entered for sign up and updating user
const checkUserFields = (request, response, next) => {
    let {firstName, lastName, username, email, password} = request.body;
    
    if (!firstName || !lastName || !username || !email || !password) {
        return response.status(400).json({message: "Please enter in all fields"});
    } else {
        next();
    }
}

// Checks inputted email is not being used by another account
const checkValidEmail = async (request, response, next) => {
    let savedUser = await User.findOne({email: request.body.email});
    if (savedUser) {
        return response.status(422).json({message: "User already exists with email"});
    } else {
        next();
    }
}

module.exports = {  
    checkUserFields,
    checkValidEmail
};