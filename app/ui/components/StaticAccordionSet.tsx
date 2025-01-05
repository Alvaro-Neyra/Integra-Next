import Accordion from "./Accordion";

export default function StaticAccordionSet({content}: {readonly content: {heading: string, paragraphs: string[]}[]}) {
    return (
        <>
            {content.map((accordion, index) => <Accordion key={accordion.heading + index} heading={accordion.heading} paragraphs={accordion.paragraphs}></Accordion>)}
        </>
    );
}