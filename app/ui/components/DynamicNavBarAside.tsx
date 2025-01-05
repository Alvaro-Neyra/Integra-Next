"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/NavBarAside.module.css";

export default function DynamicNavBarAside() {
    const pathname = usePathname();

    return (
        <aside className={styles.navBarAside}>
            <h2>Servicios</h2>
            <nav>
                <ul>
                    <li className={styles.navBarLi}><Link href={"/servicios/construccion"} className={`${pathname === "/servicios/construccion" ? styles.active : ""} ${styles.navBarAsideLink}`}>Construcción</Link></li>
                    <li className={styles.navBarLi}><Link href={"/servicios/gerencia-de-proyectos"} className={`${pathname === "/servicios/gerencia-de-proyectos" ? styles.active : ""} ${styles.navBarAsideLink}`}>Gerencia de Proyectos</Link></li>
                    <li className={styles.navBarLi}><Link href={"/servicios/inmobiliaria"} className={`${pathname === "/servicios/inmobiliaria" ? styles.active : ""} ${styles.navBarAsideLink}`}>Inmobiliaria</Link></li>
                    <li className={styles.navBarLi}><Link href={"/servicios/expediente-tecnico"} className={`${pathname === "/servicios/expediente-tecnico" ? styles.active : ""} ${styles.navBarAsideLink}`}>Expediente Técnico</Link></li>
                </ul>
            </nav>
        </aside>
    );
}