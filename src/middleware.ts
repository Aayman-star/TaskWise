import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req: NextRequest) => {});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
