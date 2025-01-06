'use client';

import Link from 'next/link';
import projects from "@/app/assets/Projects";
import styles from '../styles/Projects.module.css';
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function DynamicProjects() {
    return (
        <section className={styles["projects_section"]}>
            <h2 className='heading-2'>Proyectos</h2>
            <section className={styles.container}>
                <div className={`card__content ${styles["card__content"]}`}>
                    <Swiper
                        className={styles["card_container"]}
                        modules={[Navigation, Pagination]}
                        spaceBetween={32}
                        loop={true}
                        grabCursor={true}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            968: {
                                slidesPerView: 3,
                            },
                            1600: {
                                slidesPerView: 4,
                            }
                        }
                        }
                    >
                        {projects.map((project) => {
                            return (
                                <SwiperSlide className={styles.card} key={project.id}>
                                    <picture>
                                        <source srcSet={project.img.webp.small} type="image/webp" media="(max-width: 320px)"/>
                                        <source srcSet={project.img.webp.medium} type="image/webp" media="(max-width: 480px)"/>
                                        <source srcSet={project.img.webp.large} type="image/webp" media="(max-width: 500px)"/>

                                        <source srcSet={project.img.jpg.small} type="image/jpeg" media="(max-width: 320px)"/>
                                        <source srcSet={project.img.jpg.medium} type="image/jpeg" media="(max-width: 480px)"/>
                                        <source srcSet={project.img.jpg.large} type="image/jpeg" media="(max-width: 500px)"/>

                                        <img src={project.img.jpg.large} alt={project.name} className={styles["card__image"]}/>
                                    </picture>
                                    <div className={styles["card-content"]}>
                                        <h3 className={styles["card__title"]}>{project.name}</h3>
                                        <p className={styles["card__body"]}>{project.description}</p>
                                        <Link href="/portfolio" className={styles.button}>View More</Link>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className={`swiper-button-prev ${styles["swiper-button-prev"]}`}></div>
                    <div className={`swiper-button-next ${styles["swiper-button-next"]}`}></div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </section>
    );
}