import Announces from "@/app/assets/Announces";
import Carrusel from "./ui/components/Carrusel";
import Data from "./ui/components/Data";
import Services from "@/app/assets/Servicios";
import Projects from "./ui/components/Projects";
import InfiniteScroller from "./ui/components/InfiniteScroller";

export default async function Page() {
  return (
    <div>
      <main>
        <Carrusel images={Announces}></Carrusel>
        <Data services={Services}></Data>
        <Projects></Projects>
        <InfiniteScroller></InfiniteScroller>
      </main>
    </div>
  );
}
