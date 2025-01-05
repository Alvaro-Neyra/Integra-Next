import { ArticleServiceProps } from "@/app/lib/types";

export function ArticleService({ heading, img, paragraphs }: ArticleServiceProps) {
    return (
        <article>
            <h2>{heading}</h2>
            <picture>
                <source srcSet={img.webp.xsmall} media="(max-width: 320px)" type="image/webp" />
                <source srcSet={img.webp.small} media="(max-width: 480px)" type="image/webp" />
                <source srcSet={img.webp.medium} media="(max-width: 600px)" type="image/webp" />
                <source srcSet={img.webp.large} media="(max-width: 1024px)" type="image/webp" />
                <source srcSet={img.webp.xlarge} media="(max-width: 1200px)" type="image/webp" />
                <source srcSet={img.webp.xxlarge} media="(max-width: 1600px)" type="image/webp" />
                <source srcSet={img.webp.original} type="image/webp" />

                <source srcSet={img.jpg.xsmall} media="(max-width: 320px)" type="image/jpeg" />
                <source srcSet={img.jpg.small} media="(max-width: 480px)" type="image/jpeg" />
                <source srcSet={img.jpg.medium} media="(max-width: 600px)" type="image/jpeg" />
                <source srcSet={img.jpg.large} media="(max-width: 1024px)" type="image/jpeg" />
                <source srcSet={img.jpg.xlarge} media="(max-width: 1200px)" type="image/jpeg" />
                <source srcSet={img.jpg.xxlarge} media="(max-width: 1600px)" type="image/jpeg" />
                <source srcSet={img.jpg.original} type="image/jpeg" />

                <img src={img.jpg.original} alt={"imagen de " + heading} loading='lazy' />
            </picture>
            {paragraphs.map((paragraph, index) => <p key={paragraph + index}>{paragraph}</p>)}
        </article>
    );
}
