import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    let navBarConfig = {
        active: true,
        position: "static"
    }

    if (pathname === "/" || pathname.startsWith("/portfolio") || pathname === "/servicios") {
        navBarConfig.active = false;
        navBarConfig.position = "fixed";
    } else if (pathname.startsWith("/nosotros") || pathname.startsWith("/contacto")) {
        navBarConfig.active = true;
        navBarConfig.position = "static";
    }

    const response = NextResponse.next();
    response.headers.set("x-navbar-config", JSON.stringify(navBarConfig));
    return response;
}