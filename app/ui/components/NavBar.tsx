"use client";

import { NavBarProps } from "@/app/lib/types";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import NavLinks from "./nav-links";
import dynamic from "next/dynamic";
import { useIsSmallScreen } from "@/app/hooks/useIsSmallScreen";
import Logo from "./Logo";
import { useScrollToggle } from "@/app/hooks/useScrollToggle";

const FaBars = dynamic(() => import("react-icons/fa").then(mod => mod.FaBars));
const FaTimes = dynamic(() => import("react-icons/fa").then(mod => mod.FaTimes));

export default function NavBar({ active, position }: NavBarProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isSmallScreen = useIsSmallScreen(1024);
    const handleToggle = () => setIsExpanded(prev => !prev);
    const navBarRef = useRef<HTMLDivElement>(null);

    useScrollToggle(navBarRef, active, styles.active);

    const headerStyle: React.CSSProperties = { position: position as React.CSSProperties['position'] };

    return (
        <header ref={navBarRef} className={`${styles.navbar} ${active ? styles.active : ''}`} style={headerStyle}>
            <Logo className={styles['integra-img']} />
            <nav id="nav-menu" className={`${styles.navLinks} ${isExpanded ? styles.expanded : ''}`} aria-label="Navegación principal">
                {/* Imagen para el navbar deslizante hamburguesa */}
                {isSmallScreen && <Logo className={styles['integra-img-responsive']} />}
                <div className={styles.linkDiv}>
                    <ul className={styles.linkDivUl}>
                        <li className={styles.navLinksLi}>
                            <ul className={styles.navBarUl}>
                                <NavLinks onClick={handleToggle}></NavLinks>
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
    );
}