"use client";
import { useRouter } from "next/navigation";
import React from "react";

// function page() {
//   const router = useRouter();
//   return (
//     <>
//       <div>
//         Contact
//         <br />
//         <button onClick={() => router.push("/about")}>Go to About page</button>
//       </div>
//     </>
//   );
// }

// export default page;

function page() {
  const router = useRouter();
  const goToAbout = () => {
    router.push("/about");
  };
  return (
    <>
      <div>
        Contact
        <br />
        <button onClick={goToAbout}>Go to About page</button>
      </div>
    </>
  );
}

export default page;
