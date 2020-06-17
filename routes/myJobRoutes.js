const express = require("express");
const jobController = require("../controllers/jobController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/").get(authController.protect, jobController.getMyJobs);

router.route("/:id").get(authController.protect, jobController.getMyJob);

module.exports = router;
