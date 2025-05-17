import { NextRequest } from "next/server";

export function extractId(request: NextRequest) {
    return request.nextUrl.pathname.split("/").pop();
  }