const express = require("express");
const router = express.Router();
const onboardingController = require("../controllers/onboardingController");
const authorization = require("../middleware/authorization");

router.put("/name", authorization, onboardingController.postName);
router.put("/location", authorization, onboardingController.postLocation);
router.put("/pronouns", authorization, onboardingController.postPronouns);
router.put("/interests", authorization, onboardingController.postInterests);
router.put("/birthday", authorization, onboardingController.postBirthday);
router.put("/moments", authorization, onboardingController.postMoments);

module.exports = router;
