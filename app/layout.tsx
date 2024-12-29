import { titiliumWeb } from "./ui/fonts/fonts";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${titiliumWeb.className}`}>
        {children}
      </body>
    </html>
  );
}
