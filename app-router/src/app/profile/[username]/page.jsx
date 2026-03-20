import React from "react";

// function page() {
//   return (
//     <>
//       <div>Dynamic profile page</div>
//     </>
//   );
// }

// export default page;
//http://localhost:3000/profile/12

// async function page({ params }) {
//   const username = await params.username;
//   return (
//     <>
//       <div>Dynamic profile page- User Name- {username}</div>
//     </>
//   );
// }

// export default page;  //when use api call then use async/await  but not works

// async function page({ params }) {
//   const resolvedParams = await params;
// //    console.log("pp", resolvedParams);
//   const username = resolvedParams.username;

//   return (
//     <>
//       <div>Dynamic profile page- User Name- {username}</div>
//     </>
//   );
// }

// export default page;  //works

async function Page({ params }) {
  const { username } = await params;
  return (
    <>
      <div>user name - {username}</div>;
    </>
  );
}
export default Page;

//type-1 Dynamic route segment  [folder]

