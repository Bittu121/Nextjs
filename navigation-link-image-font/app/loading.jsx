import React from 'react'

function loading() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="h-10 w-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    </>
  );
}

export default loading
