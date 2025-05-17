import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../helper/db";
import { extractId } from "../../../../helper/extractId";
import { getResponseMessage } from "../../../../helper/responseMessage";
import { Work } from "../../../../models/works";

// GET SINGLE TASK OF USER
export async function GET(request: NextRequest) {
  try {
    const id = extractId(request);
    const works = await Work.findById(id);
    return NextResponse.json(works);
  } catch (error) {
    console.log(error);
    return getResponseMessage(
      "error in getting particular works of user",
      404,
      false
    );
  }
}

// UPDATE THE TASK/WORKS OF USER BY ID

export async function PUT(
  request: NextRequest,
) {
  await connectDb();
  const id = extractId(request);

  const { title, content, status } = await request.json();
  try {
    let work = await Work.findById(id);

    if (!work) {
      return getResponseMessage("Error: Work ID not found", 404, false);
    }

    work.title = title;
    work.content = content;
    work.status = status;

    const updatedWork = await work?.save();

    return NextResponse.json(updatedWork);
  } catch (error) {
    console.error("PUT Error:", error);
    return getResponseMessage("Error updating work", 500, false);
  }
}

// DELETE THE TASK/WORK BY ID

export async function DELETE(
  request: NextRequest,
) {
  const id = extractId(request);

  if (!id || !Types.ObjectId.isValid(id)) {
    console.log("invalid or missing user id");
    return getResponseMessage("invalid works id", 404, false);
  }

  try {
    const deletedWorks = await Work.deleteOne({ _id: new Types.ObjectId(id) });
    return getResponseMessage("works deleted successfully", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("error in deleting works", 404, false);
  }
}
