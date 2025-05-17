import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import { User } from "../../../models/user";

export async function GET(request: NextRequest) {
  const authToken = request.cookies.get("AuthToken")?.value;
  
  if (!authToken) {
    return NextResponse.json(
      { error: "No AuthToken provided" },
      { status: 401 }
      );
    }
    
    try {
    await connectDb();
    const data = jwt.verify(authToken, process.env.JWT_TOKEN!) as {
      _id: string;
    };
    console.log("Verified token:", data);

    const user = await User.findById(data._id).select("-password"); // or findOne({ _id: data._id })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ verifiedPayload: user });
  } catch (err: any) {
    console.error("JWT Verify Error:", err);
    return NextResponse.json({ error: err.message }, { status: 403 });
  }
}
