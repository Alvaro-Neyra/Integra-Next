import Innovation from "../ui/components/Innovation";
import Welcome from "../ui/components/Welcome";
import { missionImages, visionImages } from "../assets/MisionAndVision";
import ImageAndText from "../ui/components/ImageAndText";
import Values from "../ui/components/Values";

export default async function Page() {
    return (
        <div>
            <main>
                <Welcome></Welcome>
                <Innovation/>
                <ImageAndText firstText={false} firstHeading="Nuestra" secondHeading="Mision" text="Nuestra misión es ser una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={missionImages} backgroundColor="hsl(0, 0%, 95%)"></ImageAndText>
                <ImageAndText firstText={true} firstHeading="Nuestra" secondHeading="Vision" text="Nuestra visión es ser reconocidos como una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={visionImages} backgroundColor="hsl(0, 0%, 95%)"></ImageAndText>
                <Values></Values>
            </main>
        </div>
    );
}
