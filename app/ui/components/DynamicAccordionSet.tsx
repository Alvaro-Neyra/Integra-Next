"use client";
import { useState } from "react";
import Accordion from "./Accordion";

export default function DynamicAccordionSet({content}: {readonly content: {heading: string, paragraphs: string[]}[]}) {
    const [active, setActive] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActive(index === active ? null : index);
    };

    return (
        <>
            {content.map((accordion, index) => <Accordion key={accordion.heading + index} heading={accordion.heading} paragraphs={accordion.paragraphs} isActive={index === active} onClick={() => handleClick(index)}></Accordion>)}
        </>
    );
}