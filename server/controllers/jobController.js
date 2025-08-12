// server/controllers/jobController.js
import Job from "../models/Job.js";

/**
 * GET /api/jobs
 * public: returns list of jobs
 */
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error("getJobs error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/jobs/:id
 * public: job detail
 */
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("postedBy", "name email");
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    console.error("getJobById error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * POST /api/jobs
 * protected: create job (requires Authorization header)
 */
export const postJob = async (req, res) => {
  try {
    const { title, company, location, description, skills } = req.body;
    const requiredSkills = skills ? skills.split(",").map(s => s.trim()) : [];
    const postedBy = req.user ? req.user._id : undefined;

    const job = await Job.create({
      title, company, location, description, requiredSkills, postedBy
    });

    res.status(201).json(job);
  } catch (err) {
    console.error("postJob error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
