import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../../helper/db";
import { extractId } from "../../../../../helper/extractId";
import { getResponseMessage } from "../../../../../helper/responseMessage";
import { Work } from "../../../../../models/works";
export async function GET(
  request: NextRequest,
  ) {
    try {
    await connectDb();
    const id = extractId(request);

    const tasks = await Work.find({
      userId: id,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to get tasks", 404, false);
  }
}
