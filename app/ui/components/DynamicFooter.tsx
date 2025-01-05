"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "./FacebookIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function DynamicFooter() {
    const pathname = usePathname();

    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-row-section"]}>
                <section className={styles["details"]}>
                    <div className={styles["details-main"]}>
                        <Link href="/"><img src="/svg/integra-logo-blanco.svg" alt="integra-logo" className={styles["details-img"]} loading="lazy" /></Link>
                        <p className={styles["details-p"]}>Desarrollamos estrategias a la medida de sus proyectos.</p>
                    </div>
                    <ul className={styles["social-medias"]}>
                        <li><Link href={"#"}><FacebookIcon className={styles["footer-icon"]}/></Link></li>
                        <li><Link href={"#"}><LinkedInIcon classname={styles["footer-icon"]}/></Link></li>
                    </ul>
                </section>
                <section className={styles["main-footer"]}>
                    <nav className={styles["nav-footer"]}>
                        <section className={styles["menu-footer"]}>
                            <h2>Menú</h2>
                            <ul>
                                <li><Link href={"/"} className={pathname === '/' ? styles["link-active"]: ""}>Inicio</Link></li>
                                <li><Link href={"/nosotros" } className={pathname === '/nosotros' ? styles["link-active"]: ""}>Nosotros</Link></li>
                                <li><Link href={"/servicios"} className={pathname === '/servicios' ? styles["link-active"]: ""}>Servicios</Link></li>
                                <li><Link href={"/portfolio"} className={pathname === '/portfolio' ? styles["link-active"]: ""}>Portfolio</Link></li>
                                <li><Link href={"/contacto"} className={pathname === '/contacto' ? styles["link-active"]: ""}>Contacto</Link></li>
                            </ul>
                        </section>
                        <section className={styles["services-footer"]}>
                            <h2>Servicios</h2>
                            <ul>
                                <li><Link href={"/servicios/construccion"} className={pathname === '/servicios/construccion' ? styles["link-active"]: ""}>Construcción</Link></li>
                                <li><Link href={"/servicios/gerencia-de-proyectos"} className={pathname === '/servicios/gerencia-de-proyectos' ? styles["link-active"]: ""}>Gerencia de Proyectos</Link></li>
                                <li><Link href={"/servicios/inmobiliaria"} className={pathname === '/servicios/inmobiliaria' ? styles["link-active"]: ""}>Inmobiliaria</Link></li>
                                <li><Link href={"/servicios/expediente-tecnico"} className={pathname === '/servicios/expediente-tecnico' ? styles["link-active"]: ""}>Expediente técnico</Link></li>
                            </ul>
                        </section>
                        <section className={styles["contacts-footer"]}>
                            <h2>Contacto</h2>
                            <ul>
                                <li>
                                    <div className={styles["title-list"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles["footer-icon"]}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                        <h3 className={styles["heading-list"]}>DIRECCIÓN:</h3>
                                    </div>
                                    <p>Av. Caminos del Inca 3120, Santiago De Surco</p>
                                </li>
                                <li>
                                    <div className={styles["title-list"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles["footer-icon"]}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                        <h3 className={styles["heading-list"]}>CORREO:</h3>
                                    </div>
                                    <p>comercial@integraconstructores.com</p>
                                </li>
                                <li>
                                    <div className={styles["title-list"]}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles["footer-icon"]}><path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                        <h3 className={styles["heading-list"]}>CELULAR:</h3>
                                    </div>
                                    <p>(51) 940 982 514</p>
                                </li>
                            </ul>
                        </section>
                    </nav>
                </section>
            </div>
            <footer className={styles["copyright"]}>&copy; 2024 INTEGRA | Todos los derechos reservados.</footer>
        </footer>
    );
}