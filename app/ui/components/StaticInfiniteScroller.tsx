import { InfiniteScrollerType } from "@/app/lib/types";
import styles from "../styles/InfiniteScroller.module.css";

export default function StaticInfiniteScroller({ heading, content, duration, direction }: InfiniteScrollerType) {
    return (
        <section className={styles["section-container"]}>
            <h2 className="heading-2">{heading}</h2>
            <div className={styles["scroller-container"]}>
                <div className={styles.scroller} style={{ '--_animation-duration': duration, '--_animation-direction': direction } as React.CSSProperties}>
                    <div className={styles["scroller__inner"]}>
                        {
                            content.map((item, index) => {
                                return (
                                    <img src={item.img} alt={item.descripcion} key={item.id ? item.id : index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}