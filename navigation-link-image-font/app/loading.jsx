import React from 'react'

function loading() {
  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="h-10 w-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div> */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex gap-2">
          <div className="h-3 w-3 bg-black rounded-full animate-bounce" />
          <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
      </div>
    </>
  );
}

export default loading
