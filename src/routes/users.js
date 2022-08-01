const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authorization = require("../middleware/authorization");

router.get("/", authorization, userController.getUsers);
router.get("/profile/:id", authorization, userController.getUser);
router.get("/me", authorization, userController.getMyUser);

module.exports = router;
