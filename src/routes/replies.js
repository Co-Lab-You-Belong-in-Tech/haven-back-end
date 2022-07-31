const express = require("express");
const router = express.Router();
const repliesController = require("../controllers/repliesController");
const authorization = require("../middleware/authorization");

router.get("/", repliesController.getReplies);
// router.get("/:id", activityController.getActivity);
router.post("/", repliesController.postReply);
router.delete("/:id", repliesController.deleteReply);

module.exports = router;