import NavBarAside from "@/app/ui/components/NavBarAside";
import styles from "../../ui/styles/Services.module.css";
import ImageAndTextService from "@/app/ui/components/ImageAndTextService";
import { construccionArticleImages, construccionImages, paragraphs } from "@/app/assets/ConstruccionData";
import { ArticleService } from "@/app/ui/components/ArticleService";
import AccordionSet from "@/app/ui/components/AccordionSet";
import { AccordionsConstruccion } from "@/app/assets/AccordionArrays";

export default function Page() {
    return (
        <section className={styles["servicios-main"]}>
            <NavBarAside></NavBarAside>
            <section>
                <ImageAndTextService heading={"CONSTRUCCIÓN"} text={"Construimos proyectos de construcción de alta calidad en todo el país. Nuestro equipo de expertos en construcción se encarga de cada detalle, desde el diseño inicial hasta la finalización del proyecto. Nos esforzamos por superar las expectativas de nuestros clientes y entregar proyectos a tiempo y dentro del presupuesto."} img={construccionImages}></ImageAndTextService>
                <article className={styles["servicios-content"]}>
                    <p>Uno de nuestros principales servicios es la construcción de obras de infraestructura en general. Empleamos procesos eficientes y contamos con profesionales altamente calificados para asegurar la calidad a lo largo de la vida de la obra.</p>
                    <p>Ofrecemos generar valor permanentemente en todas nuestras obras reduciendo los costos  y los tiempos de ejecución a través de metodologías constructivas como Lean Construction.</p>
                    <p>Disponemos de un equipo de técnicos y profesionales con experiencia certificada para ofrecer una propuesta acorde a las expectativas del cliente.</p>
                    <p>Ejecutamos Obras de construcción tales como:</p>
                    <ul className={styles["service-list"]}>
                        <li>Edificios Unifamiliares y Multifamiliares.</li>
                        <li>Edificios de Oficinas.</li>
                        <li>Hoteles.</li>
                        <li>Laboratorios.</li>
                        <li>Clínicas y Hospitales.</li>
                        <li>Locales Comerciales.</li>
                        <li>Fabricas Industriales.</li>
                        <li>Demoliciones.</li>
                    </ul>
                    <ArticleService heading={"Implementación, Equipamiento y Remodelación."} img={construccionArticleImages} paragraphs={paragraphs}></ArticleService>
                    <AccordionSet content={AccordionsConstruccion}></AccordionSet>
                </article>
            </section>
        </section>
    );
}