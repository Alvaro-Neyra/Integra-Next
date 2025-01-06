import NavBarAside from "@/app/ui/components/NavBarAside";
import styles from "../../ui/styles/Services.module.css";
import { gerenciaImages } from "@/app/assets/GerenciaDeProyectosData";
import ImageAndTextService from "@/app/ui/components/ImageAndTextService";
import { AccordionsGerencia } from "@/app/assets/AccordionArrays";
import AccordionSet from "@/app/ui/components/AccordionSet";
import Head from "next/head";

export default function Page() {
    return (
        <>
        <Head>
            <title>Integra Constructores | Servicios - Gerencia de Proyectos</title>
            <meta name="description" content="Descubra más sobre nuestros servicios de gerencia de proyectos." />
            <meta name="keywords" content="Integra Constructores, servicios, gerencia de proyectos, proyectos, contacto, construcción, gerencia de proyectos, ingeniería civil" />

            <meta property="og:url" content="" />
            <meta property="og:title" content="Integra Constructores | Servicios - Gerencia de Proyectos" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Conoce más sobre nuestros servicios de gerencia de proyectos." />
            <meta property="og:image" content="/svg/integra-icon.svg" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="" />
            <meta property="twitter:url" content="" />
            <meta property="twitter:title" content="Integra Constructores | Servicios - Gerencia de Proyectos" />
            <meta property="twitter:description" content="Conoce más sobre nuestros servicios de gerencia de proyectos." />
            <meta property="twitter:image" content="/svg/integra-icon.svg" />

            <link rel="alternate" href="" hrefLang="es" />
            <link rel="alternate" href="" hrefLang="en" />

            <link rel="canonical" href="" />

        </Head>
        <section className={styles["servicios-main"]}>
            <NavBarAside></NavBarAside>
            <section>
                <ImageAndTextService heading={"GERENCIA DE PROYECTOS"} text={"Nuestro equipo especializado en gerencia de proyectos se dedica a la gestión de proyectos de construcción de alta calidad. Desde la planificación inicial hasta la entrega final, nos aseguramos de cumplir con los más altos estándares y expectativas. Cada proyecto es manejado con precisión y compromiso para garantizar resultados excepcionales, cumpliendo con los plazos y el presupuesto establecidos."} img={gerenciaImages}></ImageAndTextService>
                <article className={styles["servicios-content"]}>
                    <p>La infraestructura representa gran porcentaje de la inversión para iniciar un negocio. INTEGRA a través de herramientas de gestión de proyecto que se circunscriben dentro del marco del estándar internacional del Project Management Institute PMI, diseña la mejor estrategia  para que sus proyectos puedan alcanzar el máximo rendimiento.</p>
                    <p>Nuestra prioridad es ofrecer ingeniería de valor desarrollando  proyectos rentables y funcionales contribuyendo a lograr los objetivos de nuestros clientes.</p>
                    <p>Por la experiencia de nuestros profesionales y el conocimiento del mercado de la construcción, nuestra propuesta de Gestión engloba una variedad de servicios que se puede aplicar en cualquier etapa de la vida del proyecto garantizando el alcance, plazo, costo y calidad.</p>
                    <AccordionSet content={AccordionsGerencia}></AccordionSet>
                </article>
            </section>
        </section>
        </>
    );
}