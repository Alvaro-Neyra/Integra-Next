import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutNavbar } from "react-icons/tb"
import styles from "../styles/ResponsiveAsideDiv.module.css";
import { useRef } from "react";

export default function ResponsiveAsideDiv() {
    const NavAside = useRef<HTMLDivElement>(null);
    const ShadowContainer = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();

    const showNavbar = () => {
        if (NavAside.current) {
            NavAside.current.classList.toggle(styles["responsive-aside"]);
            if (NavAside.current.classList.contains(styles["responsive-aside"])) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
        }
    }

    const clickShadow = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (NavAside.current) {
            if (ShadowContainer.current && e.target === ShadowContainer.current && NavAside.current.classList.contains(styles["responsive-aside"])) {
                NavAside.current.classList.remove(styles["responsive-aside"]);
                document.body.classList.remove("no-scroll");
            }
        }
    }

    const StyledAsideButtonText = (pathname: string) => {
        switch (pathname) {
            case "/servicios/construccion":
                return "Servicios/Construcción";
            case "/servicios/gerencia-de-proyectos":
                return "Servicios/Gerencia de Proyectos";
            case "/servicios/inmobiliaria":
                return "Servicios/Inmobiliaria";
            case "/servicios/expediente-tecnico":
                return "Servicios/Expediente Técnico";
            case "/servicios/inspeccion-tecnica":
                return "Servicios/Inspección Técnica";
            case "/servicios/supervision-de-obra":
                return "Servicios/Supervisión de Obra";
            default:
                return "Servicios";
        }
    }

    return (
        <div className={styles.responsiveAsideDiv}>
            <div className={styles.responsiveAside}>
                <button className={`${styles.responsiveAsideBtn} ${styles["responsive-aside-button"]}`} onClick={showNavbar}><TbLayoutNavbar className={styles["asidenav-btn"]}></TbLayoutNavbar></button>
                {StyledAsideButtonText(pathname)}
            </div>
            <aside className={styles.responsiveAsideContainer} ref={NavAside}>
                <h2>Servicios</h2>
                <nav>
                    <ul>
                        <li className={styles.responsiveAsideLi}>
                            <Link href={"/servicios/construccion"} className={`${styles.responsiveAsideLink} ${pathname === "/servicios/construccion" ? styles.active : ""}`}>Construccion</Link>
                        </li>
                        <li className={styles.responsiveAsideLi}>
                            <Link href={"/servicios/gerencia-de-proyectos"} className={`${styles.responsiveAsideLink} ${pathname === "/servicios/gerencia-de-proyectos" ? styles.active : ""}`}>Gerencia de Proyectos</Link>
                        </li>
                        <li className={styles.responsiveAsideLi}>
                            <Link href={"/servicios/inmobiliaria"} className={`${styles.responsiveAsideLink} ${pathname === "/servicios/inmobiliaria" ? styles.active : ""}`}>Inmobiliaria</Link>
                        </li>
                        <li className={styles.responsiveAsideLi}>
                            <Link href={"/servicios/expediente-tecnico"} className={`${styles.responsiveAsideLink} ${pathname === "/servicios/expediente-tecnico" ? styles.active : ""}`}>Expediente Técnico</Link>
                        </li>
                    </ul>
                </nav>
                <button className={styles.responsiveAsideShadow} onClick={clickShadow} ref={ShadowContainer}></button>
            </aside>
        </div>
    );
}