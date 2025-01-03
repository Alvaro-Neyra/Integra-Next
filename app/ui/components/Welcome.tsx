import Blob from "./Blob";
import styles from "../styles/Welcome.module.css";

export default function Welcome() {
    return (
        <section className={styles["welcome-container"]}>
            <div className={styles["we"]}>
                <div className={styles["we-text"]}>
                    <h1><span>Bienvenido!</span><span>Somos INTEGRA 😊</span></h1>
                    <div className={styles["us-text"]}>
                        <p>Somos una empresa peruana que ofrece servicios de construcción, ingeniería y gestión, comprometidos con el desarrollo de soluciones sostenibles.</p>
                        <p>Estamos enfocados en construir confianza con nuestros clientes, logrando con nuestra experiencia y equipo de trabajo el desarrollo de estrategias eficaces que maximizan la rentabilidad del proyecto.</p>
                        <p>Continúe leyendo para obtener más información sobre la historia de Integra y su objetivo.</p>
                    </div>
                </div>
                <div className={styles["we-image"]}>
                    {/*AQUI VA LA IMAGEN SVG ANIMADA*/}
                    <div className={styles["blob-container"]}>
                        <img src="svg/rayos-de-luz.svg" alt="light-ray1" className={styles["light-ray"]} aria-hidden="true" loading="lazy"/>
                        <img src="svg/rayos-de-luz.svg" alt="light-ray2" className={styles["light-ray"]} aria-hidden="true" loading="lazy"/>
                        <div className={styles["image-container"]}>
                            <picture>
                                <source srcSet="images/nosotros-image/webp/nosotros-image-320px.webp" media="(max-width: 320px)" type="image/webp"/>
                                <source srcSet="images/nosotros-image/webp/nosotros-image-480px.webp" media="(max-width: 480px)" type="image/webp"/>
                                <source srcSet="images/nosotros-image/webp/nosotros-image-768px.webp" media="(max-width: 768px)" type="image/webp"/>
                                <source srcSet="images/nosotros-image/webp/nosotros-image-1024px.webp" media="(max-width: 1024px)" type="image/webp"/>
                                <source srcSet="images/nosotros-image/webp/nosotros-image.webp" type="image/webp"/>

                                <source srcSet="images/nosotros-image/jpg/nosotros-image-320px.jpg" media="(max-width: 320px)" type="image/jpeg"/>
                                <source srcSet="images/nosotros-image/jpg/nosotros-image-480px.jpg" media="(max-width: 480px)" type="image/jpeg"/>
                                <source srcSet="images/nosotros-image/jpg/nosotros-image-768px.jpg" media="(max-width: 768px)" type="image/jpeg"/>
                                <source srcSet="images/nosotros-image/jpg/nosotros-image-1024px.jpg" media="(max-width: 1024px)" type="image/jpeg"/>
                                <source srcSet="images/nosotros-image/jpg/nosotros-image.jpg" type="image/jpeg"/>

                                <img src="images/nosotros-image/jpg/nosotros-image.jpg" alt="Nosotros" loading="lazy"/>
                            </picture>
                        </div>
                        <Blob />
                        <Blob />
                    </div>
                </div>
            </div>
        </section>
    );
}