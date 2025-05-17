import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
//   console.log("middleware executed");
  const authToken = request.cookies.get('AuthToken')?.value;
  // console.log("==================",authToken)
  const { pathname } = request.nextUrl;
  
  const isPublicPath =  pathname === "/signup" || pathname === "/login" ;
  if (isPublicPath && authToken) {
    return NextResponse.redirect(new URL("/profile/user", request.url));
  }

  if(!isPublicPath && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();

}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/view-task",
    "/profile/:path*",
  ],
};
