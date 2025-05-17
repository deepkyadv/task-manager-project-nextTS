import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../helper/db";
import { User } from "../../../../models/user";


// GET USER BY SINGLE ID
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
  ) {
    try {
    await connectDb();
    const { id } = context.params;
    const user = await User.findById(id);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {message: "Error getting user", success: false},
      {status: 500}
    );
  }
}
// DELETE A SINGLE USER BY ID
export async function DELETE(
  request: NextRequest,
  context: { params?: { id?: string } } = {}
) {
  const id = context.params?.id;

  if (!id || !Types.ObjectId.isValid(id)) {
    console.log("invalid or missing user id");
    return NextResponse.json(
      { message: "Invalid or missing user ID", success: false },
      { status: 400 }
    );
  }

  try {
    const deletedUser = await User.deleteOne({ _id: new Types.ObjectId(id) });
    console.log("deleted user", deletedUser);

    return NextResponse.json(
      { message: "User deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { message: "Error deleting user", success: false },
      { status: 500 }
    );
  }
}

// UPDATE USER
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params
  const {name, password, about, profileUrl} = await request.json();
  try {
   let user = await User.findById(id);
   if (!user) {
    return NextResponse.json(
      { message: "User not found", success: false },
      { status: 404 }
    );
  }
   user.name = name;
   user.password = password;
   user.about = about;
   user.profileUrl = profileUrl
   const updatedUser = await user?.save();
   return NextResponse.json(updatedUser)

  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "failed to update user",
      success: "false"
    },
    {status:404}
    )
    
  }
}
