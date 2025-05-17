import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import { User } from "../../../models/user";


export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const { name, email, password, about, profileUrl } = await request.json();
    const user = new User({
      name,
      email,
      password,
      about,
      profileUrl,
    });
   const saltRounds = parseInt(process.env.BCRYPT_SALT || "10"); 
   user.password = await bcrypt.hash(user.password, saltRounds);
   const createdUser = await user.save();

  return NextResponse.json(createdUser, { status: 201 });
  }catch (error) {
  console.error("POST Error:", error);
    return NextResponse.json(
      { message: "Failed to create user"},  
      { status: 500 }
    );
  }
}

export async function GET(request:NextRequest){
  let users = []
  try {
    users = await User.find().select("-password")
    return NextResponse.json(users)
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "failed to get users",
      success: false
    })
    
  }
}


