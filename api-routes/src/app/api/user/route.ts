//NextRequest

import { NextRequest, NextResponse } from "next/server";

//NextResponse
export async function GET() {
  return NextResponse.json({
    name: "ayush",
    age: 21,
  });
}

//http://localhost:3000/api/user

export async function POST(request: NextRequest) {
  let { name, age } = await request.json();
  return NextResponse.json({
    name,
    age,
  });
}
//http://localhost:3000/api/user

