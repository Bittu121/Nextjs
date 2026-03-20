import React from "react";

// async function page({ params }) {
//   const data = await params;
//   console.log("data", data);
//   return (
//     <>
//       <div>post - {data?.post?.join(" / ")}</div>
//     </>
//   );
// }

// export default page;
//http://localhost:3000/profile/12/23

//type-2 catch-all route segment  [...folder]

async function Page({ params }) {
  const { post } = await params;

  return (
    <div>
      {post.map((item, index) => (
        <p key={index}>
          Segment {index + 1}: {item}
        </p>
      ))}
    </div>
  );
}

export default Page;