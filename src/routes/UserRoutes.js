const express = require("express");
const router = express.Router();
// Import functions from userControllers here
const {createUser} = require("../controllers/UserController");
const { checkUserFields, checkValidEmail } = require("../middleware/UserMiddleware");

router.post("/signup", checkUserFields, checkValidEmail, createUser);


module.exports = router;