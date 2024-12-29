import { useState, useEffect } from "react";

export function useIsSmallScreen(threshold : number) {
    const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== "undefined" ? window.innerWidth <= threshold : false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${threshold}px)`);

        const handleChange = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        setIsSmallScreen(mediaQuery.matches);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [threshold]);

    return isSmallScreen;
}
