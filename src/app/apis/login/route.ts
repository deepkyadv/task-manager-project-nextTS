import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import { User } from "../../../models/user";

export async function POST(request: NextRequest) {
  try {
    await connectDb(); // Ensure database is connected

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found!");
    }

    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      throw new Error("Your password did not match.");
    }

    const jwtKey = process.env.JWT_TOKEN;
    if (!jwtKey) {
      throw new Error("JWT_TOKEN is not defined in environment variables");
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      jwtKey,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
      user: user
    });

    response.cookies.set("AuthToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error: any) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
