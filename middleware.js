import { NextResponse } from "next/server";
import { getPrivateProjects } from "./data/projects";
import { ACCESS_COOKIE, accessToken, hasAccessCookie } from "./lib/access";

function isPrivateRequest(pathname, searchParams) {
  const privateProjects = getPrivateProjects();
  const slugs = new Set(privateProjects.map((project) => project.slug));
  const prefixes = privateProjects
    .map((project) => project.assetPrefix)
    .filter(Boolean);

  const projectMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (projectMatch && slugs.has(projectMatch[1])) return true;

  const dataMatch = pathname.match(/\/projects\/([^/]+)\.json$/);
  if (dataMatch && slugs.has(dataMatch[1])) return true;

  const chunkMatch = pathname.match(/\/pages\/projects\/([^./]+)/);
  if (chunkMatch && slugs.has(chunkMatch[1])) return true;

  const assetPath = `${pathname} ${searchParams.get("url") || ""}`;
  return prefixes.some((prefix) => assetPath.includes(`/assets/${prefix}`) || assetPath.includes(`/${prefix}`));
}

function deny(request) {
  const accept = request.headers.get("accept") || "";
  if (accept.includes("text/html")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return new NextResponse(null, { status: 404 });
}

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;
  const token = accessToken();

  if (pathname.startsWith("/view/")) {
    const provided = decodeURIComponent(pathname.slice("/view/".length).replace(/\/$/, ""));
    if (token && provided === token) {
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.set(ACCESS_COOKIE, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 90,
      });
      return response;
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPrivateRequest(pathname, searchParams)) return NextResponse.next();
  if (hasAccessCookie(request.headers.get("cookie") || "")) return NextResponse.next();
  return deny(request);
}

export const config = {
  matcher: [
    "/view/:path*",
    "/projects/:path*",
    "/assets/:path*",
    "/_next/image",
    "/_next/data/:path*",
    "/_next/static/chunks/pages/projects/:path*",
  ],
};
