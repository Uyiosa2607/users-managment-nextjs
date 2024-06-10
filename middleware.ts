import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, "/login");
    return Response.redirect(url);
  }
});

export const config = {
  matcher: [
    "/dashboard",
    "/users",
    "/profile",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
