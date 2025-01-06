"use client";

import { useEffect, useRef } from "react";
import { MdArrowUpward } from "react-icons/md";

export default function GoToTop() {

    const btn = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (btn.current) {
            btn.current.style.visibility = 'hidden';
            btn.current.style.opacity = '0';
        }
    })

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollFunction = () => {
        if (btn.current) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                btn.current.style.visibility = 'visible';
                btn.current.style.opacity = '1';
            } else {
                btn.current.style.visibility = 'hidden';
                btn.current.style.opacity = '0';
            }
        }
    };

    window.onscroll = () => {
        scrollFunction();
    };

    return (
        <button ref={btn} className="gototop-btn" onClick={goTop}><MdArrowUpward /></button>
    );
}