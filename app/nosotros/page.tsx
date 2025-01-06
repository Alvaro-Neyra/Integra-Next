import Innovation from "../ui/components/Innovation";
import Welcome from "../ui/components/Welcome";
import { missionImages, visionImages } from "../assets/MisionAndVision";
import ImageAndText from "../ui/components/ImageAndText";
import Values from "../ui/components/Values";
import Head from "next/head";

export default async function Page() {
    return (
        <div>
            <Head>
                <title>Integra Constructores | Nosotros</title>
                <meta name="description" content="Descubre quienes somos, que hacemos en Integra Constructores y que servicios ofrecemos" />
                <meta name="keywords" content="Integra Constructores, servicios, proyectos, construcción, gerencia de proyectos, ingeniería civil" />

                <meta property="og:url" content="" />
                <meta property="og:title" content="Integra Constructores | Nosotros" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Conoce que es Integra Constructores" />
                <meta property="og:image" content="/svg/integra-icon.svg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Integra Constructores | Nosotros" />
                <meta property="twitter:description" content="Conoce que es Integra Constructores" />
                <meta property="twitter:image" content="/svg/integra-icon.svg" />

                <link rel="alternate" href="" hrefLang="es" />
                <link rel="alternate" href="" hrefLang="en" />

                <link rel="canonical" href="" />

            </Head>
            <main>
                <Welcome></Welcome>
                <Innovation />
                <ImageAndText firstText={false} firstHeading="Nuestra" secondHeading="Mision" text="Nuestra misión es ser una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={missionImages} backgroundColor="hsl(0, 0%, 95%)"></ImageAndText>
                <ImageAndText firstText={true} firstHeading="Nuestra" secondHeading="Vision" text="Nuestra visión es ser reconocidos como una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={visionImages} backgroundColor="hsl(0, 0%, 95%)"></ImageAndText>
                <Values></Values>
            </main>
        </div>
    );
}
