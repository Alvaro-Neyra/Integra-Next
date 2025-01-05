import style from "../styles/Accordion.module.css";

export default function Accordion({heading, paragraphs, isActive, onClick}: {readonly heading: string, readonly paragraphs: string[], readonly isActive?: boolean, readonly onClick?: () => void}) {
    return (
        <>
            <button className={`${style.accordion} ${isActive ? style.rotate : ""}`} onClick={onClick}>
                <h2>{heading}</h2>
            </button>
            <article className={`${style.articleAccordion} ${isActive ? style.open : ""}`} onClick={onClick}>
                <ul className={style["service-list"]}>
                    {paragraphs.map((paragraph, index) => <li key={paragraph + index}>{paragraph}</li>)}
                </ul>
            </article>
        </>
    );

}