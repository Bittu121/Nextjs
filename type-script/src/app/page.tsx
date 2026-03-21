// "use client";
// import React, { useEffect, useState } from "react";
// import Button from "./components/Button";

// function page() {
//   const [count, setCount] = useState<number>(0);
//   // function fn() {}
//   const handleClick = () => {
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div>
//         {/* <Button data="Clicked" action={fn} /> */}
//         <div className="flex flex-col justify-center items-center h-screen gap-4">
//           <h1 className="text-2xl font-bold">Count: {count}</h1>
//           <Button data="Increase Count" action={handleClick} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default page;



//useRef
"use client";
import React, { useRef } from "react";

function page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent) => {};
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleClick=(e:React.MouseEvent)=>{
    e.preventDefault();
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} onChange={handleChange} />
          <button onClick={handleClick}>Click</button>
        </form>
      </div>
    </>
  );
}

export default page;



// function useRef<T>(arg0: null) {
//     throw new Error("Function not implemented.");
// }
