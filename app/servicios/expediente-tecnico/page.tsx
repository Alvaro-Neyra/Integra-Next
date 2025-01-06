import NavBarAside from "@/app/ui/components/NavBarAside";
import styles from "../../ui/styles/Services.module.css";
import ImageAndTextService from "@/app/ui/components/ImageAndTextService";
import { AccordionsExpediente } from "@/app/assets/AccordionArrays";
import AccordionSet from "@/app/ui/components/AccordionSet";
import { expedienteImages } from "@/app/assets/ExpedienteData";
import Head from "next/head";

export default function Page() {
    return (
        <>
        <Head>
            <title>Integra Constructores | Servicios - Expediente Técnico</title>
            <meta name="description" content="Descubra más sobre nuestros servicios de expediente técnico." />
            <meta name="keywords" content="Integra Constructores, servicios, expediente técnico, proyectos, contacto, construcción, gerencia de proyectos, ingeniería civil" />

            <meta property="og:url" content="" />
            <meta property="og:title" content="Integra Constructores | Servicios - Expediente Técnico" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Conoce más sobre nuestros servicios de expediente técnico." />
            <meta property="og:image" content="/svg/integra-icon.svg" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="" />
            <meta property="twitter:url" content="" />
            <meta property="twitter:title" content="Integra Constructores | Servicios - Expediente Técnico" />
            <meta property="twitter:description" content="Conoce más sobre nuestros servicios de expediente técnico." />
            <meta property="twitter:image" content="/svg/integra-icon.svg" />

            <link rel="alternate" href="" hrefLang="es" />
            <link rel="alternate" href="" hrefLang="en" />

            <link rel="canonical" href="" />

        </Head>
        <section className={styles["servicios-main"]}>
            <NavBarAside></NavBarAside>
            <section>
                <ImageAndTextService heading={"EXPEDIENTE TÉCNICO"} text={"Nuestro servicio de expediente técnico ofrece una solución completa para la gestión y documentación de proyectos. Nos encargamos de la elaboración de informes técnicos detallados que cumplen con los requisitos normativos y técnicos necesarios para la correcta ejecución de los proyectos. Aseguramos que todos los aspectos del proyecto estén debidamente documentados y respaldados para garantizar la transparencia y el cumplimiento de los estándares de calidad."} img={expedienteImages}></ImageAndTextService>
                <article className={styles["servicios-content"]}>
                    <p>INTEGRA ofrece el servicio de desarrollo de expediente técnico en el cual implementa la metodología BIM logrando mejores resultados en todas las etapas del proyecto.</p>
                    <p>Es muy poderosa la ventaja que brinda contar con un modelamiento 3D en los proyectos ya que a través del mismo se puede evaluar la viabilidad del proyecto, realizar las estimaciones de costos con mayor precisión, realizar la planificación de la ejecución con menor incertidumbre, hacer seguimiento al plan de calidad, compatibilizar planos de todas las especialidades reduciendo el número de consultas en la ejecución y logrando ahorros.</p>
                    <p>Tener un modelo 3D del proyecto permite a nuestros clientes tener una idea más clara del producto final antes de la ejecución de obra, es así que el mayor número de modificaciones solicitadas por los clientes se darán oportunamente en la etapa de proyecto.</p>
                    <AccordionSet content={AccordionsExpediente}></AccordionSet>
                </article>
            </section>
        </section>
        </>
    );
}