import { titiliumWeb } from "./ui/fonts/fonts";
import "./globals.css";
import NavBar from "./ui/components/NavBar";
import { headers } from "next/headers";
import Footer from "./ui/components/Footer";
import AbsoluteElements from "./ui/components/AbsoluteElements";
import Head from "next/head";


export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const headersList = await headers();
  const navbarConfig = headersList.get("x-navbar-config");

  const active = navbarConfig ? JSON.parse(navbarConfig).active : false;
  const position = navbarConfig ? JSON.parse(navbarConfig).position : "static";

  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Integra Constructores</title>

         {/* Meta tags importantes para SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#5767aa" />
        <link rel="icon" type="image/svg+xml" href="./favicon.ico" />
        <meta name="description" content="Web Oficial de Integra, donde encontraras datos de la empresa y los servicios que ofrece." />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="" />
        <meta property="og:title" content="Integra Constructores" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Visita el sitio web oficial de Integra Constructores" />
        <meta property="og:image" content="/svg/integra-icon.svg" />

        {/* Twitter Open Graph Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Integra Constructores" />
        <meta property="twitter:description" content="Visita el sitio web oficial de Integra Constructores" />
        <meta property="twitter:image" content="/svg/integra-icon.svg" />

         {/* Recursos alternativos */}
        <link rel="alternate" href="" hrefLang="es" />
        <link rel="alternate" href="" hrefLang="en" />

        {/* Canonical URL */}
        <link rel="canonical" href="" />

        <meta name="keywords" content="Integra, Constructores, Servicios, Construccion, Gerencia de Proyectos, Inmobiliaria, Expediente Tecnico, Soluciones, Ingenieria Civil, Empresa Peruana, Peru" />
        <meta name="author" content="Integra Constructores" />

      </Head>
      <body className={`${titiliumWeb.className}`}>
        <section>
          <NavBar active={active} position={position} />
          {children}
        </section>
        <Footer></Footer>
        <AbsoluteElements />
      </body>
    </html>
  );
}
