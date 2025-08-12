import React, { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    skills: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post("http://localhost:5000/api/jobs", jobData, {
    
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(res.data)
    alert("Job Posted Successfully!");
    setJobData({ title: "", company: "", location: "", description: "", skills: "" });
  } catch (err) {
    alert("Failed to post job");
  }
};


  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={jobData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="skills"
          placeholder="Required Skills (comma separated)"
          value={jobData.skills}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
