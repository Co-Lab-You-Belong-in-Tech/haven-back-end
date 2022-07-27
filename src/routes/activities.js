const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const authorization = require("../middleware/authorization");

router.get("/", activityController.getAllActivities);
router.get("/:id", activityController.getActivity);
router.post("/", activityController.postActivity);
router.delete("/:id", activityController.deleteActivity);

module.exports = router;
