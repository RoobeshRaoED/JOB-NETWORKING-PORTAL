// server/routes/jobRoutes.js
import express from "express";
import { getJobs, postJob, getJobById } from "../controllers/jobController.js";
import { protect } from "../utils/authMiddleware.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJobById);
router.post("/", protect, postJob);

export default router;
