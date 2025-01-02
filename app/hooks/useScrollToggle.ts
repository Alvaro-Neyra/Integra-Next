"use client";

import { useEffect } from 'react';

export const useScrollToggle = ((ref: React.RefObject<HTMLElement | null>, active: boolean, activeClass: string) => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                ref.current?.classList.add(activeClass);
            } else {
                ref.current?.classList.remove(activeClass);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref, activeClass, active]);
});

export default useScrollToggle;