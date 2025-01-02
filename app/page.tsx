import Announces from "@/app/assets/Announces";
import Carrusel from "./ui/components/Carrusel";

export default async function Page() {
  return (
    <div>
      <main>
        <Carrusel images={Announces}></Carrusel>
      </main>
    </div>
  );
}
