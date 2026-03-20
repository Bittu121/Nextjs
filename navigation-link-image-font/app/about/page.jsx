// import React from "react";
// import Image from "next/image";

// function page() {
//   return (
//     <>
//       <div>
//         About
//         {/* <Image src="/next.svg" alt="vercel" width={200} height={200} /> */}
//         {/* <Image
//           src="/next.svg"
//           alt="vercel"
//           width={200}
//           height={200}
//           style={{ width: "100%", height: "auto" }}
//         /> */}
//         <Image
//           src="/next.svg"
//           alt="vercel"
//           width={200}
//           height={200}
//           style={{ height: "auto" }}
//         />
//       </div>
//     </>
//   );
// }

// export default page;

import Image from "next/image";

function Page() {
  return (
    <div>
      <h1>About</h1>
      {/* <Image src="/next.svg" alt="vercel" width={200} height={200} priority /> */}
      {/* Remote image */}
      {/* Unsplash */}
      <Image
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800"
        alt="unsplash"
        width={300}
        height={200}
      />

      {/* istockphoto hosted */}
      <Image
        src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
        alt="google"
        width={300}
        height={200}
      />
    </div>
  );
}
export default Page;
