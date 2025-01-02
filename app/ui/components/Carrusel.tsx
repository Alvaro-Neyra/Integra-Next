import { Announcement } from "@/app/lib/types";
import StaticCarrusel from "./StaticCarrusel";
import { Suspense } from "react";
import DynamicCarrusel from "./DynamicCarrusel";

export default function Carrusel({images}: {images: Announcement[]}) {
    return (
        <Suspense fallback={<StaticCarrusel images={images}/>}>
            <DynamicCarrusel images={images}/>
        </Suspense>
    );
}