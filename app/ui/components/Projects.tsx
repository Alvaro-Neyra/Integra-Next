import { Suspense } from "react";
import StaticProjects from "./StaticProjects";
import DynamicProjects from "./DynamicProjects";

export default function Projects() {
    return (
        <Suspense fallback={<StaticProjects></StaticProjects>}>
            <DynamicProjects></DynamicProjects>
        </Suspense>
    );
}