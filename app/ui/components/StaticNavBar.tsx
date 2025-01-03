import { NavBarProps } from "@/app/lib/types";
import styles from "../styles/NavBar.module.css";
import Logo from "./Logo";
import Link from "next/link";

export default function StaticNavBar({ active, position }: Readonly<NavBarProps>) {
    return (
        <header className={`${styles.navbar} ${active ? styles.active : ''}`} style={{ position: position as React.CSSProperties['position'] }}>
            <Logo className={styles["integra-img"]} />
            <nav id="nav-menu" className={`${styles.navLinks} ${styles.navBarDesktop}`} aria-label="Navegación principal">
                <div className={styles.linkDiv}>
                    <ul className={styles.linkDivUl}>
                        <li className={styles.navLinksLi}>
                            <ul className={styles.navBarUl}>
                                <li>
                                    <Link href={"/"} className={styles.navBarLink} style={{width: `100%` as React.CSSProperties['width']}}>Inicio</Link>
                                </li>
                                <li>
                                    <Link href={"/nosotros"} className={styles.navBarLink} style={{width: `100%` as React.CSSProperties['width']}}>Nosotros</Link>
                                </li>
                                <li>
                                    <Link href={"/servicios"} className={styles.navBarLink} style={{width: `100%` as React.CSSProperties['width']}}>Servicios</Link>
                                </li>
                                <li>
                                    <Link href={"/portfolio"} className={styles.navBarLink} style={{width: `100%` as React.CSSProperties['width']}}>Portfolio</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.navBarLi}>
                            <a href="/contacto" className={styles["contact-btn"]}>Contáctenos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}