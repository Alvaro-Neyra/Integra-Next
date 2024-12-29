import { useEffect } from "react";

export function useScrollToggle(ref: React.RefObject<HTMLElement | null>, active: boolean, activeClass: string) {
    useEffect(() => {
        if (!active) {
            const handleScroll = () => {
                if (ref.current) {
                    if (window.scrollY > 80) {
                        ref.current.classList.add(activeClass);
                    } else {
                        ref.current.classList.remove(activeClass);
                    }
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [ref, active, activeClass]);
}
