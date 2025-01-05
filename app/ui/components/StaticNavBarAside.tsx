import styles from "../styles/NavBarAside.module.css";
import Link from "next/link";

export default function StaticNavBarAside() {
    return (
        <aside className={styles.navBarAside}>
            <h2>Servicios</h2>
            <nav>
                <ul>
                    <li className={styles.navBarLi}><Link href={"/servicios/construccion"} className={styles.navBarAsideLink}>Construcción</Link></li>
                    <li className={styles.navBarLi}><Link href={"/servicios/gerencia-de-proyectos"} className={styles.navBarAsideLink}>Gerencia de Proyectos</Link></li>
                    <li className={styles.navBarLi}><Link href={"/servicios/inmobiliaria"} className={styles.navBarAsideLink}>Inmobiliaria</Link></li>
                    <li className={styles.navBarLi}><Link href={"/servicios/expediente-tecnico"} className={styles.navBarAsideLink}>Expediente Técnico</Link></li>
                </ul>
            </nav>
        </aside>
    );
}