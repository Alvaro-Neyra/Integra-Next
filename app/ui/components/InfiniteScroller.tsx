import { Suspense } from "react";
import StaticInfiniteScroller from "./StaticInfiniteScroller";
import clientesArreglo from "@/app/assets/Clients";
import DynamicInfiniteScroller from "./DynamicInfiniteScroller";

export default function InfiniteScroller() {
    return (
        <Suspense fallback={<StaticInfiniteScroller heading="Clientes" content={clientesArreglo} duration="20s" direction="forwards" />}>
            <DynamicInfiniteScroller heading="Clientes" content={clientesArreglo} duration="20s" direction="forwards" />
        </Suspense>
    );
}