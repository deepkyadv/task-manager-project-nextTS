import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const response = NextResponse.json({
        message: "Logged Out",
        successs: true
    })

    response.cookies.set("AuthToken", " ", {
            expires: new Date(0)
    })
    return response

}