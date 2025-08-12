import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Merge DB data with safe defaults so skills is always an array
        setUser({
          name: res.data.name || "Unnamed User",
          email: res.data.email || "No email provided",
          role: res.data.role || "Frontend Developer",
          location: res.data.location || "Unknown location",
          about: res.data.bio || "No bio yet. Add something about yourself!",
          skills: Array.isArray(res.data.skills) ? res.data.skills : []
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Profile</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Edit Profile
        </button>
      </header>

      <div className="bg-white rounded shadow p-6 flex items-center space-x-6 mb-6">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.role}</p>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.location}</p>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">About Me</h3>
        <p className="text-gray-700">{user.about}</p>
      </div>

      <div className="bg-white rounded shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {(user.skills || []).map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Resume</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) alert(`Uploaded: ${file.name}`);
          }}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0 file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
    </div>
  );
}

export default Profile;
