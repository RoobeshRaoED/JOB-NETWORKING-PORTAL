// client/src/components/JobCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function JobCard({ id, title, company, location, description }) {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate(`/jobs/${id}`)}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-sm mt-2">{location}</p>
      <p className="text-sm mt-1 text-gray-700">{description}</p>
    </div>
  );
}

export default JobCard;
