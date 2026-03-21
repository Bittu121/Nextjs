import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
//query params
let query =  request.nextUrl.searchParams.get("q")
return NextResponse.json({
    query
})
}

//http://localhost:3000/api/search?q=30