import { HeroPortfolio } from "../assets/HeroText";
import { videoPortfolio } from "../assets/Videos";
import Hero from "../ui/components/HeroVideo";

export default async function Page() {
    return (
        <div>
            <main>
                <Hero video={videoPortfolio} heading={"Portfolio"} paragraphs={HeroPortfolio} linkText={"No hay proyectos actualmente"} linkTo={"#"}></Hero>
            </main>
        </div>
    );
}
