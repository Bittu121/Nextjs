//Note- ssr,ssg and isr ye teeno only server component par kaam karte hai
'use client'
import React, { useEffect } from "react";

async function page() {
  //ssr --> server side rendering [page server component call in page server component]
  // let response = await fetch("http://localhost:3000/api/user", {
  //   cache: "no-store",
  // });
  // let data = await response.json();
  // console.log(data);

  //ssg
  // let response=await fetch('http://localhost:3000/api/user',{
  //   cache:'force-cache'
  // })
  // let data=await response.json()
  // console.log(data)

  //isr
  // let response=await fetch('http://localhost:3000/api/user',{
  //   next:{revalidate:5}
  // })
  // let data=await response.json()
  // console.log(data)

  //csr(client side rendering-->reactjs)
  const handleApi = async () => {
    let response = await fetch("/api/user");
    let data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    handleApi();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default page;
