const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const bcrypt = require("bcrypt");
const validInfo = require("../middleware/validInfo")
const authoriziton = require("../middleware/authorization")

router.post("/register", validInfo, authController.registerUser)

module.exports = router;