import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../../helper/db";
import { getResponseMessage } from "../../../../../helper/responseMessage";
import { Work } from "../../../../../models/works";
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
  ) {
    const { id } = context.params;
    try {
    await connectDb();
    const tasks = await Work.find({
      userId: id,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to get tasks", 404, false);
  }
}
