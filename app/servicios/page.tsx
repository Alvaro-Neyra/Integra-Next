import { HeroServices } from "../assets/HeroText";
import { videoServicios } from "../assets/Videos";
import Data from "../ui/components/Data";
import Hero from "../ui/components/HeroVideo";
import Services from "@/app/assets/Servicios";

export default async function Page() {
    return (
        <div>
            <main>
                <Hero video={videoServicios} heading={"Servicios"} paragraphs={HeroServices} linkText={"Ver Servicios"} linkTo={"#services"}></Hero>
                <Data services={Services}></Data>
            </main>
        </div>
    );
}
