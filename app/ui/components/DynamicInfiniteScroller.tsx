"use client";
import { InfiniteScrollerType } from "@/app/lib/types";
import { useEffect, useRef } from "react";
import styles from "../styles/InfiniteScroller.module.css";


export default function DynamicInfiniteScroller({ heading, content, duration, direction }: InfiniteScrollerType) {
    const scroller = useRef<HTMLDivElement>(null);
    const scrollerInner = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            if (scroller.current) {
                console.log("Scroller: ", scroller.current);
                scroller.current.setAttribute("data-animated", "true");
            }

            if (scrollerInner.current) {
                const scrollerContent = Array.from(scrollerInner.current.children);
                console.log("Scroller Inner: ", scrollerInner.current);
                console.log("Scroller Content: ", scrollerContent);
                scrollerContent.forEach((element) => {
                    const clone = element.cloneNode(true) as HTMLElement;
                    clone.setAttribute("aria-hidden", "true");
                    scrollerInner.current?.appendChild(clone);
                });
            }
        }

    }, []);

    return (
        <section className={styles["section-container"]}>
            <h2 className="heading-2">{heading}</h2>
            <div className={styles["scroller-container"]}>
                <div ref={scroller} className={styles.scroller} style={{ '--_animation-duration': duration, '--_animation-direction': direction } as React.CSSProperties}>
                    <div ref={scrollerInner} className={styles["scroller__inner"]}>
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