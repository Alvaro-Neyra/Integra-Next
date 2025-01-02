import { titiliumWeb } from "./ui/fonts/fonts";
import "./globals.css";
import NavBar from "./ui/components/NavBar";
import { headers } from "next/headers";


export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const headersList = await headers();
  const navbarConfig = headersList.get("x-navbar-config");

  let active = true;
  let position = "static";
  if (navbarConfig) {
    const config = JSON.parse(navbarConfig);
    active = config.active;
    position = config.position;
  }
  return (
    <html lang="es">
      <body className={`${titiliumWeb.className}`}>
        <NavBar active={active} position={position} />
        {children}
      </body>
    </html>
  );
}
