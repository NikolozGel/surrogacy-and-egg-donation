import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  return createMiddleware(routing)(request);
}

export const config = {
  locales: ["en", "ka", "ru", "zh"],
  defaultLocale: "en",
  matcher: ["/", "/(ka|en|ru|zh)/:path*"], // მნიშვნელოვანია რომ "/" იყოს matcher-ში
};
