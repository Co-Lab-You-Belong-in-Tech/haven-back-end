const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const authorization = require("../middleware/authorization");

router.get("/", authorization, activityController.getAllActivities);
router.get("/:id", authorization, activityController.getActivity);
router.post("/", authorization, activityController.postActivity);
router.delete("/:id", authorization, activityController.deleteActivity);

module.exports = router;
