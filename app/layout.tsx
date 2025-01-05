import { titiliumWeb } from "./ui/fonts/fonts";
import "./globals.css";
import NavBar from "./ui/components/NavBar";
import { headers } from "next/headers";
import Footer from "./ui/components/Footer";


export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const headersList = await headers();
  const navbarConfig = headersList.get("x-navbar-config");

  const active = navbarConfig ? JSON.parse(navbarConfig).active : true;
  const position = navbarConfig ? JSON.parse(navbarConfig).position : "static";

  return (
    <html lang="es">
      <body className={`${titiliumWeb.className}`}>
        <NavBar active={active} position={position} />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
