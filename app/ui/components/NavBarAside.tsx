import { Suspense } from "react";
import StaticNavBarAside from "./StaticNavBarAside";
import DynamicNavBarAside from "./DynamicNavBarAside";

export default function NavBarAside() {
    return (
        <Suspense fallback={<StaticNavBarAside />}>
            <DynamicNavBarAside />
        </Suspense>
    );
}