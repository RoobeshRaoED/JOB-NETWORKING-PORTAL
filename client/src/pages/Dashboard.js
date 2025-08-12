import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const stored = localStorage.getItem("userInfo");
let userName = "User";
try {
  userName = stored ? JSON.parse(stored).name || "User" : "User";
} catch (e) {
  userName = "User";
}
  // ✅ Redirect if no token found
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Go back to login
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect back to login
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="bg-white px-4 py-2 rounded shadow">
            Welcome, {userName} 👋
            <button
              onClick={handleLogout}
              className="ml-4 text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Jobs Applied</h2>
            <p className="text-2xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Interviews Scheduled</h2>
            <p className="text-2xl font-bold text-green-600">3</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">New Job Matches</h2>
            <p className="text-2xl font-bold text-purple-600">7</p>
          </div>
        </section>

        {/* Job Listings Table */}
        <section className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Job Listings</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Job Title</th>
                <th className="px-4 py-2 text-left">Company</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Frontend Developer</td>
                <td className="px-4 py-2">TechCorp</td>
                <td className="px-4 py-2">New York, NY</td>
                <td className="px-4 py-2 text-green-600">Open</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2">Backend Engineer</td>
                <td className="px-4 py-2">InnoSoft</td>
                <td className="px-4 py-2">San Francisco, CA</td>
                <td className="px-4 py-2 text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="px-4 py-2">UI/UX Designer</td>
                <td className="px-4 py-2">CreativeLabs</td>
                <td className="px-4 py-2">Remote</td>
                <td className="px-4 py-2 text-green-600">Open</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
