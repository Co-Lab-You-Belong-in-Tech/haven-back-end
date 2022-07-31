const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const authorization = require("../middleware/authorization");

router.get("/", authorization, activityController.getAllActivities);
router.post("/", authorization, activityController.postActivity);
router.delete("/:id", authorization, activityController.deleteActivity);
router.get("/:id/replies", authorization, activityController.getReplies);
router.post("/:id/replies", authorization, activityController.postReply);
router.delete(
  "/:id/replies/:reply_id",
  authorization,
  activityController.deleteReply
);

module.exports = router;
