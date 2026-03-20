import React from "react";
import Link from "next/link";

function notfound() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-7xl font-bold text-gray-900 tracking-tight">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          It might have been moved, deleted, or never existed.
        </p>
        
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}

export default notfound;
