import Link from 'next/link';
import { staticProjects } from "@/app/assets/Projects";
import styles from '../styles/Projects.module.css';

export default function StaticProjects() {
    return (
        <section className={styles["projects_static_section"]}>
            <h2 className='heading-2'>Proyectos</h2>
            <section className={styles.container}>
                <div className={styles["card__static__content"]}>
                    <div className={styles["card_static_container"]}>
                        {staticProjects.map((project) => {
                            return (
                                <div className={styles["static-card"]} key={project.id}>
                                    <picture>
                                        <source srcSet={project.img.webp.small} type="image/webp" media="(max-width: 320px)"/>
                                        <source srcSet={project.img.webp.medium} type="image/webp" media="(max-width: 480px)"/>
                                        <source srcSet={project.img.webp.large} type="image/webp" media="(max-width: 500px)"/>

                                        <source srcSet={project.img.jpg.small} type="image/jpeg" media="(max-width: 320px)"/>
                                        <source srcSet={project.img.jpg.medium} type="image/jpeg" media="(max-width: 480px)"/>
                                        <source srcSet={project.img.jpg.large} type="image/jpeg" media="(max-width: 500px)"/>

                                        <img src={project.img.jpg.large} alt={project.name} className={styles["card__static__image"]}/>
                                    </picture>
                                    <div className={styles["card-static-content"]}>
                                        <h3 className={styles["card__title"]}>{project.name}</h3>
                                        <p className={styles["card__body"]}>{project.description}</p>
                                        <Link href="/portfolio" className={styles.button}>View More</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </section>
    );
}