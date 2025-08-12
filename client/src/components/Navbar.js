import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="font-bold">Job Network</div>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/post-job">Post Job</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="ml-4 text-red-400">
              Logout
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
