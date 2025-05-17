import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../helper/db";
import { User } from "../../../../models/user";

// GET USER BY ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();

    const { id } = params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid user ID", success: false },
        { status: 400 }
      );
    }

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { message: "Error retrieving user", success: false },
      { status: 500 }
    );
  }
}

// UPDATE USER BY ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();

    const { id } = params;
    const { name, password, about, profileUrl } = await request.json();

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid user ID", success: false },
        { status: 400 }
      );
    }

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 }
      );
    }

    user.name = name;
    user.password = password;
    user.about = about;
    user.profileUrl = profileUrl;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { message: "Failed to update user", success: false },
      { status: 500 }
    );
  }
}

// DELETE USER BY ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();

    const { id } = params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid user ID", success: false },
        { status: 400 }
      );
    }

    const result = await User.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "User deleted successfully", success: true, result },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { message: "Error deleting user", success: false },
      { status: 500 }
    );
  }
}
