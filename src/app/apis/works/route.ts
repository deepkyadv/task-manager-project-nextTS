import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import { getResponseMessage } from "../../../helper/responseMessage";
import { Work } from "../../../models/works";

interface MyTokenPayload extends JwtPayload {
  _id: string;
  email: string;
}

// WORK TASK CREATING
export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const { title, content, userId } = await request.json();

    const authToken = request.cookies.get("AuthToken")?.value;
    console.log(authToken);
    if (!authToken) {
      return NextResponse.json(
        { error: "No AuthToken provided" },
        { status: 401 }
      );
    }
    const data = jwt.verify(authToken, process.env.JWT_TOKEN!)  as MyTokenPayload;
    console.log("Verified id:", data._id);
    const work = new Work({
      title,
      content,
      userId: data._id,
    });

    const createdWork = await work.save();
    return NextResponse.json(createdWork, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to created task",
      success: false,
    });
  }
}

//WORK TASK GETTING
export async function GET(request: NextRequest) {
  try {
    const works = await Work.find();
    return NextResponse.json(works);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting data", 404, false);
  }
}
