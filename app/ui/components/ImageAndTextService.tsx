import { ImageAndTextServiceProps } from "@/app/lib/types";
import styles from "../styles/ImageAndTextService.module.css";

export default function ImageAndTextService({heading, text, img}: ImageAndTextServiceProps) {
    return (
        <section className={styles.section}>
            <div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>

            <picture>
                <source srcSet={img.webp.xsmall} media='(max-width: 320px)' type='image/webp'/>
                <source srcSet={img.webp.small} media='(max-width: 480px)' type='image/webp'/>
                <source srcSet={img.webp.medium} media='(max-width: 600px)' type='image/webp'/>
                <source srcSet={img.webp.large} media='(max-width: 1024px)' type='image/webp'/>
                <source srcSet={img.webp.xlarge} media='(max-width: 1200px)' type='image/webp'/>
                <source srcSet={img.webp.original} type='image/webp'/>

                <source srcSet={img.jpg.xsmall} media='(max-width: 320px)' type='image/jpeg'/>
                <source srcSet={img.jpg.small} media='(max-width: 480px)' type='image/jpeg'/>
                <source srcSet={img.jpg.medium} media='(max-width: 600px)' type='image/jpeg'/>
                <source srcSet={img.jpg.large} media='(max-width: 1024px)' type='image/jpeg'/>
                <source srcSet={img.jpg.xlarge} media='(max-width: 1200px)' type='image/jpeg'/>
                <source srcSet={img.jpg.original} type='image/jpeg'/>

                <img src={img.jpg.original} alt={"image of " + heading} loading='lazy'/>
            </picture>
        </section>
    );
}