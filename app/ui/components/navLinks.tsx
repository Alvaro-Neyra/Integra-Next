import ButtonLink from "./ButtonLink";
import styles from "../styles/NavBar.module.css";
import { useRef } from "react";

export default function NavLinks({ activePath, onClick }: { activePath: string; onClick: () => void }) {
    const servicesRef = useRef<HTMLDivElement>(null);

    const showServices = () => {
        if (window.innerWidth <= 1024) return;
        if (servicesRef.current) {
            servicesRef.current.classList.add(styles.serviciosPopupActive);
        }
    };

    const hideServices = () => {
        if (window.innerWidth <= 1024) return;
        if (servicesRef.current) {
            servicesRef.current.classList.remove(styles.serviciosPopupActive);
        }
    };

    return (
        <>
            <li>
                <ButtonLink
                    active={activePath === '/'} onClick={onClick} href="/" className={styles.navBarLink} width={"100%"}>
                    Inicio
                </ButtonLink>
            </li>
            <li>
                <ButtonLink
                    active={activePath === '/nosotros'} onClick={onClick} href="/nosotros" className={styles.navBarLink} width={"100%"}>
                    Nosotros
                </ButtonLink>
            </li>
            <li className={styles.liServicesContainer} onMouseOver={showServices} onMouseOut={hideServices}>
                <ButtonLink
                    active={activePath === '/servicios'} onClick={onClick} href="/servicios" className={styles.navBarLink} width={"100%"}>
                    Servicios
                </ButtonLink>
                <div className={styles.serviciosPopup} ref={servicesRef}>
                    <ButtonLink width={"100%"} active={activePath === '/servicios/construccion'} href="/servicios/construccion" onClick={onClick} className={styles.navBarLink}>Construcción</ButtonLink>
                    <ButtonLink width={"100%"} active={activePath === '/servicios/gerencia-de-proyectos'} href="/servicios/gerencia-de-proyectos" onClick={onClick} className={styles.navBarLink}>Gerencia de proyectos</ButtonLink>
                    <ButtonLink width={"100%"} active={activePath === '/servicios/inmobiliaria'} href="/servicios/inmobiliaria" onClick={onClick} className={styles.navBarLink}>Inmobiliaria</ButtonLink>
                    <ButtonLink width={"100%"} active={activePath === '/servicios/expediente-tecnico'} href="/servicios/expediente-tecnico" onClick={onClick} className={styles.navBarLink}>Expediente Técnico</ButtonLink>
                </div>
            </li>
            <li>
                <ButtonLink
                    active={activePath === '/portfolio'} onClick={onClick} href="/portfolio" className={styles.navBarLink} width={"100%"}>
                    Portfolio
                </ButtonLink>
            </li>
        </>
    );
}