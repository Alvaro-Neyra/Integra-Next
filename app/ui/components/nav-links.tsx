import { usePathname } from "next/navigation";
import ButtonLink from "./ButtonLink";
import styles from "../styles/NavBar.module.css";

const links = [
    { name: 'Inicio', href: '/'},
    { name: 'Nosotros', href: '/nosotros'},
    { name: 'Servicios', href: '/servicios'},
    { name: 'Portfolio', href: '/portfolio'},
];

export default function NavLinks({ onClick }: { onClick: () => void }) {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <li key={link.href} className={styles.navBarLi}>
                        <ButtonLink 
                        href={link.href}
                        active={pathname === link.href}
                        width={"100%"}
                        className={styles.navBarLink}
                        onClick={onClick}
                        >
                        {link.name}
                        </ButtonLink>
                    </li>
                )
            })}
        </>
    );
}