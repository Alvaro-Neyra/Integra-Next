import styles from "../styles/Values.module.css";
import valores from "../../assets/Valores";
import TextCard from "./TextCard";

export default function Values() {
    return (
        <section className={styles["values-container"]}>
        <img src="svg/pink-arrow.svg" alt="pink-arrow" className={styles["pink-arrow"]} loading="lazy"/>
        <img src="svg/star.svg" alt="yellow-star" className={styles["yellow-star"]} loading="lazy"/>
        <h2 className='heading-2'>Valores</h2>
        <p>NUESTROS VALORES ESTÁN EN CONSTANTE CONTRUCCIÓN HACIA LA PERFECCIÓN</p>
        <div className={styles["values"]}>
            {valores.map((valor, index) => {
                return <TextCard key={valor.text + index} heading={valor.heading} text={valor.text} />
            })}
        </div>
        </section>
    );
}