import { Suspense } from "react";
import StaticAccordionSet from "./StaticAccordionSet";
import DynamicAccordionSet from "./DynamicAccordionSet";
import { Accordion } from "@/app/lib/types";

export default function AccordionSet({content}: {readonly content: Accordion[]}) {
    return (
        <Suspense fallback={<StaticAccordionSet content={content}></StaticAccordionSet>}>
            <DynamicAccordionSet content={content}></DynamicAccordionSet>
        </Suspense>
    );
}