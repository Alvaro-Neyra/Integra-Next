import NavBarAside from "@/app/ui/components/NavBarAside";
import styles from "../../ui/styles/Services.module.css";
import ImageAndTextService from "@/app/ui/components/ImageAndTextService";
import projectPhases from "../../assets/ProjectPhases";
import { inmobiliariaImages } from "@/app/assets/InmobiliariaData";
import Head from "next/head";

export default function Page() {
    return (
        <>
            <Head>
                <title>Integra Constructores | Servicios - Inmobiliaria</title>
                <meta name="description" content="Descubra más sobre nuestros servicios de inmobiliaria." />
                <meta name="keywords" content="Integra Constructores, servicios, inmobiliaria, proyectos, contacto, construcción, gerencia de proyectos, ingeniería civil" />

                <meta property="og:url" content="" />
                <meta property="og:title" content="Integra Constructores | Servicios - Inmobiliaria" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Conoce más sobre nuestros servicios de inmobiliaria." />
                <meta property="og:image" content="/svg/integra-icon.svg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Integra Constructores | Servicios - Inmobiliaria" />
                <meta property="twitter:description" content="Conoce más sobre nuestros servicios de inmobiliaria." />
                <meta property="twitter:image" content="/svg/integra-icon.svg" />

                <link rel="alternate" href="" hrefLang="es" />
                <link rel="alternate" href="" hrefLang="en" />

                <link rel="canonical" href="" />

            </Head>
            <section className={styles["servicios-main"]}>
                <NavBarAside></NavBarAside>
                <section>
                    <ImageAndTextService heading={"INMOBILIARIA"} text={"En nuestro servicio inmobiliario, ofrecemos soluciones integrales para la compra, venta y gestión de propiedades. Contamos con un equipo de expertos que asesoran y apoyan a nuestros clientes en cada paso del proceso inmobiliario, asegurando transacciones seguras y exitosas. Nos comprometemos a proporcionar un servicio personalizado, adaptado a las necesidades específicas de cada cliente, y a maximizar el valor de sus inversiones en bienes raíces."} img={inmobiliariaImages}></ImageAndTextService>
                    <article className={styles["servicios-content"]}>
                        <p>INTEGRA desarrolla todo el ciclo de vida del proyecto,  desde la evaluación de la compra del terreno hasta la entrega del producto al usuario final logrando la rentabilidad esperada.</p>
                        <p>Por la experiencia del equipo de INTEGRA orientamos la mejor estrategia según la ubicación del proyecto con el objetivo de satisfacer la necesidades de los clientes.</p>

                        {projectPhases.map((phase, index) => {
                            return (
                                <ul key={phase.title + index} className={styles["service-list"]}>
                                    <h2>{phase.title}</h2>
                                    {phase.tasks.map((task, index) => {
                                        return <li key={index + task}>{task}</li>
                                    })}
                                </ul>
                            );
                        })}
                    </article>
                </section>
            </section>
        </>
    );
}