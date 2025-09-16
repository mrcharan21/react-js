import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-center mt-8 text-3xl md:text-5xl text-red-500 font-bold">
        Page Not Found
      </h1>
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded px-4 py-2 mt-8 text-lg md:text-2xl">
          Go to Home
        </button>
      </Link>
    </div>
  );
}
