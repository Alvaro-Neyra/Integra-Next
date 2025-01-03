import styles from "../styles/Innovation.module.css";
import Link from "next/link";

export default function Innovation() {
    return (
        <section className={styles["innovation-section"]}>
            <div className={styles["images-container"]}>
                <img className={styles["blue-arrow"]} src="svg/bluecurvearrow.svg" alt="blue-arrow" loading="lazy" />
                <picture>
                    <source srcSet="images/innovation-image/webp/innovation1-320px.webp" media="(max-width: 320px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation1-480px.webp" media="(max-width: 480px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation1.webp" type="image/webp" />

                    <source srcSet="images/innovation-image/jpg/innovation1-320px.jpg" media="(max-width: 320px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation1-480px.jpg" media="(max-width: 480px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation1.jpg" type="image/jpeg" />

                    <img src="images/innovation-image/jpg/innovation1.jpg" alt="imagen-innovacion1" loading="lazy" className={styles["image1"]} />
                </picture>

                <picture>
                    <source srcSet="images/innovation-image/webp/innovation2-320px.webp" media="(max-width: 320px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation2-480px.webp" media="(max-width: 480px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation2.webp" type="image/webp" />

                    <source srcSet="images/innovation-image/jpg/innovation2-320px.jpg" media="(max-width: 320px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation2-480px.jpg" media="(max-width: 480px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation2.jpg" type="image/jpeg" />

                    <img src="images/innovation-image/jpg/innovation2.jpg" alt="imagen-innovacion2" loading="lazy" className={styles["image2"]} />
                </picture>

                <picture>
                    <source srcSet="images/innovation-image/webp/innovation3-320px.webp" media="(max-width: 320px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation3-480px.webp" media="(max-width: 480px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation3.webp" type="image/webp" />

                    <source srcSet="images/innovation-image/jpg/innovation3-320px.jpg" media="(max-width: 320px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation3-480px.jpg" media="(max-width: 480px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation3.jpg" type="image/jpeg" />

                    <img src="images/innovation-image/jpg/innovation3.jpg" alt="imagen-innovacion3" loading="lazy" className={styles["image3"]} />
                </picture>

                <picture>
                    <source srcSet="images/innovation-image/webp/innovation4-320px.webp" media="(max-width: 320px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation4-480px.webp" media="(max-width: 480px)" type="image/webp" />
                    <source srcSet="images/innovation-image/webp/innovation4.webp" type="image/webp" />

                    <source srcSet="images/innovation-image/jpg/innovation4-320px.jpg" media="(max-width: 320px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation4-480px.jpg" media="(max-width: 480px)" type="image/jpeg" />
                    <source srcSet="images/innovation-image/jpg/innovation4.jpg" type="image/jpeg" />

                    <img src="images/innovation-image/jpg/innovation4.jpg" alt="imagen-innovacion4" loading="lazy" className={styles["image4"]} />
                </picture>
            </div>
            <div className={styles["innovation-text-container"]}>
                <h2>Innovación</h2>
                <p>Nuestro enfoque principal es del desarrollo de proyectos inmobiliarios de edificaciones (viviendas, comercio y oficinas), habilitaciones urbanas con fines inmobiliarios (lotizaciones de vivienda, comercio e industria) y sistemas de utilización de media y baja tensión (redes de distribución y alumbrado, subestaciones eléctricas) , logramos proyectos con alta rentabilidad y aseguramos la inversión de nuestros clientes y agregando valor al usuario final. contamos con certificación iso 9001-2015 lo que garantiza la calidad de nuestros servicios a nuestro cliente.</p>
                <p>Conoce nuestros servicios:</p>
                <Link className={styles["innovation-btn"]} href="/servicios">Ver Servicios</Link>
            </div>
        </section>
    );
}