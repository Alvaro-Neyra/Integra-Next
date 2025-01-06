import { HeroVideoProps } from "@/app/lib/types";
import Link from "next/link";
import styles from "../styles/HeroVideo.module.css";

export default function Hero({ video, heading, paragraphs, linkText, linkTo }: Readonly<HeroVideoProps>) {
    return (
        <section className={styles["section-serviciospage"]}>
            <video className={styles['video-hero']} autoPlay loop muted playsInline preload="auto" poster={video.thumbnail}>
                <source src={video.webm["240p"]} media="(max-width: 320px)" type="video/webm" />
                <source src={video.webm["360p"]} media="(max-width: 480px)" type="video/webm" />
                <source src={video.webm["480p"]} media="(max-width: 768px)" type="video/webm" />
                <source src={video.webm["720p"]} media="(max-width: 1024px)" type="video/webm" />
                <source src={video.webm["1080p"]} media="(max-width: 1440px)" type="video/webm" />
                <source src={video.webm["original"]} type="video/webm" />

                <source src={video.mp4["240p"]} media="(max-width: 320px)" type="video/mp4" />
                <source src={video.mp4["360p"]} media="(max-width: 480px)" type="video/mp4" />
                <source src={video.mp4["480p"]} media="(max-width: 768px)" type="video/mp4" />
                <source src={video.mp4["720p"]} media="(max-width: 1024px)" type="video/mp4" />
                <source src={video.mp4["1080p"]} media="(max-width: 1440px)" type="video/mp4" />
                <source src={video.mp4["original"]} type="video/mp4" />

                <source src={video.webm["original"]} type="video/webm" />
            </video>
            <div className={styles["hero-text"]}>
                <h1 className={styles['hero-heading']}>{heading}</h1>
                {paragraphs.map((paragraph) => { return <p key={paragraph}>{paragraph}</p> })}
                <Link href={linkTo} className={styles['hero-link']}>{linkText}</Link>
            </div>
        </section>
    );

}