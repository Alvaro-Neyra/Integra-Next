import { Suspense } from "react";
import DynamicFooter from "./DynamicFooter";
import StaticFooter from "./StaticFooter";

export default function Footer() {
    return (
        <Suspense fallback={<StaticFooter />}>
            <DynamicFooter />
        </Suspense>
    );
}