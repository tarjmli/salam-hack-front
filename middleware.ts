import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/profile"];
  const authRoutes = ["/auth/login", "/auth/signup"];

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
