import Link from "next/link";
import styles from "../styles/StatusCodeError.module.css";

export default function StatusCodeError() {
    return (
        <section className={styles["notfound-container"]}>
                <div className={styles["main-notfound"]}>
                    <div className={styles["error-container"]}>
                        <div>Oops!</div>
                        <h1>404</h1>
                        <div className={styles["page-notfound"]}>Página no encontrada</div>
                    </div>
                    <p className={styles["text-notfound"]}>No pudimos encontrar esa página.</p>
                    <div className={styles["suggest-container"]}>
                        <p>Tal vez puedas encontrar lo que necesitas aquí:</p>
                        <div className={styles["anchors"]}>
                            <Link href="/" className={styles["red-btn"]}>INICIO</Link>
                            <Link href="/servicios" className={styles["blue-btn"]}>SERVICIOS</Link>
                            <Link href="/contacto" className={styles["yellow-btn"]}>CONTACTO</Link>
                        </div>
                        <img src="/svg/flecha-notfound.svg" alt="flecha" className={styles["arrow-notfound"]} loading="lazy" />
                    </div>
                </div>
                <div className={styles["design"]}></div>
                <div className={styles["design-circle"]}></div>
                <img src="/svg/404.svg" alt="errorImage" className={styles["notfound-img"]} loading="lazy" />
        </section>
    );
}