// client/src/components/ProfileCard.js
import React from "react";

function ProfileCard({ name, email, role, bio }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border text-center">
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`}
        alt="Profile Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{email}</p>
      <p className="text-sm text-gray-600 mt-2">{role}</p>
      <p className="mt-2 text-gray-700">{bio}</p>
    </div>
  );
}

export default ProfileCard;
