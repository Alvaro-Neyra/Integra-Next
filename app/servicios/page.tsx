import Head from "next/head";
import { HeroServices } from "../assets/HeroText";
import { videoServicios } from "../assets/Videos";
import Data from "../ui/components/Data";
import Hero from "../ui/components/HeroVideo";
import Services from "@/app/assets/Servicios";

export default async function Page() {
    return (
        <div>
            <Head>
                <title>Integra Constructores | Servicios</title>
                <meta name="description" content="Descubre los servicios que ofrece Integra Constructores, desde construcción hasta gerencia de proyectos." />
                <meta name="keywords" content="servicios, construcción, gerencia de proyectos, ingeniería civil" />

                <meta property="og:url" content="" />
                <meta property="og:title" content="Integra Constructores | Servicios" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Conoce los servicios de Integra Constructores" />
                <meta property="og:image" content="/svg/integra-icon.svg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Integra Constructores | Servicios" />
                <meta property="twitter:description" content="Conoce los servicios de Integra Constructores" />
                <meta property="twitter:image" content="/svg/integra-icon.svg" />

                <link rel="alternate" href="" hrefLang="es" />
                <link rel="alternate" href="" hrefLang="en" />

                <link rel="canonical" href="" />

            </Head>
            <main>
                <Hero video={videoServicios} heading={"Servicios"} paragraphs={HeroServices} linkText={"Ver Servicios"} linkTo={"#services"}></Hero>
                <Data services={Services}></Data>
            </main>
        </div>
    );
}
