const { hashString } = require("../services/auth_services")

// Hashes and salts password upon creation and updating
const hashPasswordMiddleware = async (request, response, next) => {
    let hashedPassword = request.body.password
    hashedPassword = await hashString(request.body.password);
    
    next()
}

module.exports = {hashPasswordMiddleware};