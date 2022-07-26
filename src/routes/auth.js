const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
console.log(controller)

router.post("/register", controller.registerUser)

module.exports = router;