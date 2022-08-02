const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const friendsController = require("../controllers/friendsController");
const authorization = require("../middleware/authorization");

router.get("/", authorization, userController.getUsers);
router.get("/profile/:id", authorization, userController.getUser);
router.get("/me", authorization, userController.getMyUser);
router.get(
  "/me/friends_req/incoming",
  authorization,
  friendsController.getIncomingRequests
);
router.get(
  "/me/friends_req/outgoing",
  authorization,
  friendsController.getOutgoingRequests
);
router.post("/profile/:id", authorization, friendsController.sendFriendRequest);

module.exports = router;
