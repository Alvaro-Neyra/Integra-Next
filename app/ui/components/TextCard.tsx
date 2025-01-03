import styles from "../styles/Values.module.css";

export default function TextCard({heading, text}: {readonly heading: string, readonly text: string}) {
    return (
        <div className={styles.divTextCard}>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    );
}