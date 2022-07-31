const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const authorization = require("../middleware/authorization");

router.get("/", activityController.getAllActivities);
router.post("/", activityController.postActivity);
router.delete("/:id", activityController.deleteActivity);
router.get("/:id/replies", activityController.getReplies);
router.post("/:id/replies", activityController.postReply);
router.delete("/:id/replies/:reply_id", activityController.deleteReply);

module.exports = router;
