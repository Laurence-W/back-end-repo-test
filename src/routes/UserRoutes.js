const express = require("express");
const router = express.Router();
// Import functions from userControllers here
const {createUser} = require("../controllers/UserController");
// Middleware Imports
const { checkUserFields, checkValidEmail, checkPasswordLength } = require("../middleware/UserMiddleware");

router.post("/signup", checkUserFields, checkValidEmail, checkPasswordLength, createUser);


module.exports = router;