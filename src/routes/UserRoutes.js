const express = require("express");
const router = express.Router();
// Import functions from userControllers here
const {createUser} = require("../controllers/UserController");
const { hashPasswordMiddleware } = require("../middleware/UserMiddleware");

router.post("/signup", hashPasswordMiddleware, createUser);


module.exports = router;