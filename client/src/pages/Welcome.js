// client/src/pages/Welcome.js
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')`
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to Job Network
        </h1>
        <p className="text-lg mb-6 text-gray-200">
          Your gateway to jobs & networking opportunities
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
