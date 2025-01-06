import Head from "next/head";
import { HeroPortfolio } from "../assets/HeroText";
import { videoPortfolio } from "../assets/Videos";
import Hero from "../ui/components/HeroVideo";

export default async function Page() {
    return (
        <div>
            <Head>
                <title>Integra Constructores | Portfolio</title>
                <meta name="description" content="Descubre los proyectos que ha realizado Integra Constructores, como proyectos industriales o edificios" />
                <meta name="keywords" content="proyectos, construcción, gerencia de proyectos, ingeniería civil" />

                <meta property="og:url" content="" />
                <meta property="og:title" content="Integra Constructores | Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Conoce los proyectos de Integra Constructores" />
                <meta property="og:image" content="/svg/integra-icon.svg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Integra Constructores | Portfolio" />
                <meta property="twitter:description" content="Conoce los proyectos de Integra Constructores" />
                <meta property="twitter:image" content="/svg/integra-icon.svg" />

                <link rel="alternate" href="" hrefLang="es" />
                <link rel="alternate" href="" hrefLang="en" />

                <link rel="canonical" href="" />

            </Head>
            <main>
                <Hero video={videoPortfolio} heading={"Portfolio"} paragraphs={HeroPortfolio} linkText={"No hay proyectos actualmente"} linkTo={"#"}></Hero>
            </main>
        </div>
    );
}
