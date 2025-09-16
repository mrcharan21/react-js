import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowMessage(true);
    setTimeout(() => {
      navigate('/login'); // Change '/login' to your login route if different
    }, 1500); // 1.5 seconds delay
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {!showMessage ? (
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded px-4 py-2 mt-8 text-lg md:text-2xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <div className="text-xl font-semibold mt-8 text-green-700">
          Thank you!
        </div>
      )}
    </div>
  );
}
