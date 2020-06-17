const express = require("express");
const jobController = require("../controllers/jobController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(/*authController.protect,*/ jobController.getAllJobs)
  .post(authController.protect, jobController.createJob);

router
  .route("/:id")
  .get(authController.protect, jobController.getJob)
  .post(authController.protect, jobController.interestJob)
  .patch(authController.protect, jobController.updateJob)
  .delete(authController.protect, jobController.deleteJob);

module.exports = router;
