"use client";

import { NavBarProps } from "@/app/lib/types";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useIsSmallScreen } from "@/app/hooks/useIsSmallScreen";
import Logo from "./Logo";
import { useScrollToggle } from "@/app/hooks/useScrollToggle";
import { usePathname } from "next/navigation";
import NavLinks from "./navLinks";
import ResponsiveAsideDiv from "./ResponsiveAsideDiv";

const FaBars = dynamic(() => import("react-icons/fa").then(mod => mod.FaBars));
const FaTimes = dynamic(() => import("react-icons/fa").then(mod => mod.FaTimes));

export default function DynamicNavBar() {
    // Genera un setTimeOut para ver el renderizado del navbar estatico
    const pathname = usePathname();

    const [activeAsideNav, setActiveAsideNav] = useState(false);
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState<NavBarProps['position']>('static');

    useEffect(() => {
        if (pathname.startsWith("/servicios/")) {
            setActiveAsideNav(true);
        } else {
            setActiveAsideNav(false);
        }

        if (pathname === "/" || pathname.startsWith("/portfolio") || pathname === "/servicios") {
            setActive(false);
            setPosition("fixed");
        } else if (pathname.startsWith("/nosotros") || pathname.startsWith("/contacto") || pathname.startsWith("/servicios")) {
            setActive(true);
            setPosition("static");
        }
    }, [pathname]); // Reacciona a los cambios de pathname

    const [isExpanded, setIsExpanded] = useState(false);
    const isSmallScreen = useIsSmallScreen(1024);
    const handleToggle = () => setIsExpanded(prev => !prev);
    const navBarRef = useRef<HTMLDivElement>(null);

    const isScrollToggleEnabled = ["/", "/portfolio", "/servicios"].includes(pathname);

    useScrollToggle(navBarRef, active, styles.active, isScrollToggleEnabled);

    const headerStyle: React.CSSProperties = { position: position as React.CSSProperties['position'] };

    return (
        <div className={activeAsideNav ? styles.navbars : ""}>
            <header ref={navBarRef} className={`${styles.navbar} ${active ? styles.active : ''}`} style={headerStyle}>
                <Logo className={styles['integra-img']} />
                <nav id="nav-menu" className={`${styles.navLinks} ${isExpanded ? styles.expanded : ''}`} aria-label="Navegación principal">
                    {/* Imagen para el navbar deslizante hamburguesa */}
                    {isSmallScreen && <Logo className={styles['integra-img-responsive']} />}
                    <div className={styles.linkDiv}>
                        <ul className={styles.linkDivUl}>
                            <li className={styles.navLinksLi}>
                                <ul className={styles.navBarUl}>
                                    <NavLinks activePath={pathname} onClick={handleToggle}></NavLinks>
                                </ul>
                            </li>
                            <li className={styles.navBarLi}>
                                <Link href={"/contacto"} className={styles["contact-btn"]} onClick={handleToggle}>Contáctenos</Link>
                            </li>
                        </ul>
                        {isSmallScreen && (
                            <button
                                className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`}
                                onClick={handleToggle}
                                aria-expanded={isExpanded}
                                aria-controls="nav-menu"
                                aria-label="Cerrar menú de navegación"
                            >
                                <FaTimes className={styles.barsIcon} />
                                <span className={styles["sr-only"]}>Cerrar menú de navegación</span>
                            </button>
                        )}
                    </div>
                </nav>
                {isSmallScreen && (
                    <button
                        className={`${styles["nav-btn"]}`}
                        onClick={handleToggle}
                        aria-expanded={isExpanded}
                        aria-controls="nav-menu"
                        aria-label="Abrir menú de navegación"
                    >
                        <FaBars className={styles.barsIcon} />
                        <span className={styles["sr-only"]}>Abrir menú de navegación</span>
                    </button>
                )}
            </header>
            {activeAsideNav && isSmallScreen && (
                <ResponsiveAsideDiv />
            )}
        </div>
    );
}