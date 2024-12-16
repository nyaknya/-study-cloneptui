import Header from "@/components/Header";
import MainVisual from "./(home)/MainVisual";
import MainFeatures from "./(home)/MainFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <MainFeatures />
      </main>
    </>
  );
}
