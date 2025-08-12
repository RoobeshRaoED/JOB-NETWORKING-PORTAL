// client/src/pages/Jobs.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          jobs.map((job) => (
            <JobCard
              key={job._id}
              id={job._id}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description.slice(0, 100) + "..."}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Jobs;
