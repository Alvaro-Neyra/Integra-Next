import NavBar from "./ui/components/NavBar";

export default async function Page() {
  return (
    <div>
      <NavBar active={false} position={"fixed"}></NavBar>
      <main>
      </main>
    </div>
  );
}
