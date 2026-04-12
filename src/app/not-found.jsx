import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-base-100">
      
      <h1 className="text-7xl font-extrabold text-purple-600">404</h1>

      <h2 className="text-2xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
      >
        Go Home
      </Link>

    </div>
    );
};

export default NotFound;