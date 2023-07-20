// Import User model, to create functionality with them
const {User} = require("../models/UserModel");





// Sign up function 
const createUser = async (request, response) => {
    let {firstName, lastName, username, email, password} = request.body;

    // Conditional check to ensure all fields have data
    if (!firstName || !lastName || !username || !email || !password) {
        return response.status(400).json({message: "Please enter in all fields"})
    }

    // Conditional check for password length
    if (password.length < 8) {
        return response.status(400).json({message: "Password not long enough, please enter 8 or more characters"});
    }

    // Conditional check to see if user exists within db
    let savedUser = await User.findOne({email: email});
    if (savedUser) {
        return response.status(422).json({message: "User already exists with email"});
    }
}