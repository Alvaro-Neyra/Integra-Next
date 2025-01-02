import { Announcement } from "@/app/lib/types";
import styles from "@/app/ui/styles/Carrusel.module.css";
import Image from "next/image";
import Link from "next/link";

export default function StaticCarrusel({images}: {images: Announcement[]}) {
    return (
        <section className={styles.carrusel}>
        <div className={styles.carruselWrapper}>
            {images.map((image, index) => {
                return <div key={image.title} className={
                    index === 0 ? `${styles.carruselCard} ${styles.carruselCardActive}` : `${styles.carruselCard}`
                }>
                    <Image src={image.img}
                        alt={image.title}
                        className={styles.carruselImg}
                        width={1600}
                        height={900}
                    />
                    <article className={styles.cardOverlay}>
                        <h2 className={styles.cardTitle}>{image.title}</h2>
                        <p className={styles.cardText}>{image.text}</p>
                    </article>
                    <section className={styles.buttonLists}>
                        <Link href="/portfolio" className={styles.carruselBtn}>Ver Proyecto</Link>
                        <Link href="/contacto" className={styles.carruselBtn}>Contáctenos</Link>
                    </section>
                </div>
            })}
            <i className={styles.carruselArrowLeft}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></i>
            <i className={styles.carruselArrowRight}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></i>
            <div className={styles.carruselPagination}>
                {images.map((_, index) => {
                    return (
                        <span key={index} className={
                            index === 0 ? `${styles.paginationDot} ${styles.paginationDotActive}` : `${styles.paginationDot}`
                        }
                        ></span>
                    );
                })}

            </div>
        </div>
    </section>
    );
}