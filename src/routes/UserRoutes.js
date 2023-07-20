const express = require("express");
const router = express.Router();
// Import functions from userControllers here
const {createUser} = require("../controllers/UserController")

router.post("/signup", createUser);


module.exports = router;