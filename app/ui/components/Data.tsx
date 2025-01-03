import { Service } from "@/app/lib/types";
import Link from "next/link";
import styles from "../styles/Data.module.css";

export default function Data({ services }: { readonly services: Service[] }) {
    return (
        <section id="services" className={styles.servicesSection}>
            <h2 className={`${styles.servicesTitle} heading-2`}>Nuestros servicios</h2>
            <div className={styles.servicesContainer}>
                {services.map((service, index) => {
                    return (
                        <article className={styles.serviceContainer} key={service.nombre + index}>
                            <picture>
                                <source srcSet={service.image.webp.small} media="(max-width: 320px)" type="image/webp" />
                                <source srcSet={service.image.webp.medium} media="(max-width: 480px)" type="image/webp" />
                                <source srcSet={service.image.webp.large} media="(max-width: 600px)" type="image/webp" />
                                <source srcSet={service.image.webp.xlarge} media="(max-width: 1024px)" type="image/webp" />
                                <source srcSet={service.image.webp.original} type="image/webp" />

                                <source srcSet={service.image.jpg.small} media="(max-width: 320px)" type="image/jpeg" />
                                <source srcSet={service.image.jpg.medium} media="(max-width: 480px)" type="image/jpeg" />
                                <source srcSet={service.image.jpg.large} media="(max-width: 600px)" type="image/jpeg" />
                                <source srcSet={service.image.jpg.xlarge} media="(max-width: 1024px)" type="image/jpeg" />
                                <source srcSet={service.image.jpg.original} type="image/jpeg" />

                                <img src={service.image.jpg.original} alt={service.nombre} className={styles.serviceImage} />
                            </picture>
                            <div className={styles.serviceOverlay}>
                                <service.icon className={styles.serviceIcon} />
                                <h3 className={styles.serviceTitle}>{service.nombre}</h3>
                                <p className={styles.serviceDescription}>{service.descripcion}</p>
                                <Link href={service.route} className={styles.serviceMasInformacion}>
                                    <svg className={styles.serviceIconMasInformacion} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                    <span>
                                        Más información
                                    </span>
                                </Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    );
}