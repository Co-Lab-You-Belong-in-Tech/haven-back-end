const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const authorization = require("../middleware/authorization")

router.post("/", authorization, activityController.getAllActivities);
router.post("/:id", authorization, activityController.getActivity);


module.exports = router;