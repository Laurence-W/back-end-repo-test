// Import User model, to create functionality with them
const {User} = require("../models/UserModel");
const { hashString } = require("../services/auth_services");





// Sign up function 
const createUser = async (request, response) => {

    // Hash and salt password
    let hashedPassword = await hashString(request.body.password);

    let user = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
        isAdmin: false,
        isTrainer: false
    })

    await user.save().then((user) => {
        response.json({message: "User saved successfully"})
        console.log(user.email);
    }).catch((error) => {
        console.log(`Error occurred when saving user, error:\n` + error);
    })
}



module.exports = {createUser};