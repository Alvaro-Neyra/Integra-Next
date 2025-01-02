import { Suspense } from "react";
import StaticNavBar from "./StaticNavBar";
import DynamicNavBar from "./DynamicNavBar";
import { NavBarProps } from "@/app/lib/types";

export default function NavBar({active, position}: NavBarProps) {
    return (
        <Suspense fallback={<StaticNavBar active={active} position={position} />}>
            <DynamicNavBar/>
        </Suspense>
    );
}
