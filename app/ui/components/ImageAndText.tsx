import { ImageAndTextProps } from "@/app/lib/types";
import styles from "../styles/ImageAndText.module.css";

export default function ImageAndText({ firstText, firstHeading, secondHeading, text, image, backgroundColor, textColor }: Readonly<ImageAndTextProps>) {
    const altText = `Image of ${secondHeading || firstHeading}`;
    const orderValue = firstText ? styles.order1 : styles.order2;
    const orderImage = firstText ? styles.order2 : styles.order1;

    return (
        <section className={styles["sectionImageAndText"]}>
            <picture className={`${styles["pictureImageAndText"]} ${orderImage}`}>
                <source srcSet={image.webp.xsmall} media='(max-width: 320px)' type='image/webp' />
                <source srcSet={image.webp.small} media='(max-width: 480px)' type='image/webp' />
                <source srcSet={image.webp.medium} media='(max-width: 768px)' type='image/webp' />
                <source srcSet={image.webp.large} media='(max-width: 1024px)' type='image/webp' />
                <source srcSet={image.webp.xlarge} media='(max-width: 1200px)' type='image/webp' />
                <source srcSet={image.webp.xxlarge} media='(max-width: 1600px)' type='image/webp' />
                <source srcSet={image.webp.original} type='image/webp' />

                <source srcSet={image.jpg.xsmall} media='(max-width: 320px)' type='image/jpeg' />
                <source srcSet={image.jpg.small} media='(max-width: 480px)' type='image/jpeg' />
                <source srcSet={image.jpg.medium} media='(max-width: 768px)' type='image/jpeg' />
                <source srcSet={image.jpg.large} media='(max-width: 1024px)' type='image/jpeg' />
                <source srcSet={image.jpg.xlarge} media='(max-width: 1200px)' type='image/jpeg' />
                <source srcSet={image.jpg.xxlarge} media='(max-width: 1600px)' type='image/jpeg' />
                <source srcSet={image.jpg.original} type='image/jpeg' />

                <img src={image.jpg.original} alt={altText} loading="lazy" title={altText} className={styles["imgImageAndText"]}/>
            </picture>
            <div className={`${styles["divImageAndText"]} ${orderValue}`} style={{ color: textColor, backgroundColor: backgroundColor}}>
                <h2><span>{firstHeading}</span><span>{secondHeading}</span></h2>
                <p>{text}</p>
            </div>
        </section>
    );
}