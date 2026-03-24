import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/login"];
const PUBLIC_API_PATHS = ["/api/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isFile = /\.[^/]+$/.test(pathname);

  if (
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    isFile
  ) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("app_auth")?.value;
  const isAuthenticated = authCookie === "ok";

  const isPublicPage = PUBLIC_PATHS.includes(pathname);
  const isPublicApi = PUBLIC_API_PATHS.includes(pathname);
  const isApiRoute = pathname.startsWith("/api/");

  if (isApiRoute) {
    if (!isAuthenticated && !isPublicApi) {
      return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    }

    return NextResponse.next();
  }

  if (!isAuthenticated && !isPublicPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};