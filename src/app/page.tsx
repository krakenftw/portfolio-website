import DotPattern from "@/components/DotPattern";
import GridPattern from "@/components/GridPattern";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <DotPattern
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        height={30}
        width={30}
      />
      <div className="text-3xl font-bold">
        <strong>Hey, 👋🏻</strong>
        <br /> I am kraken
      </div>
    </div>
  );
}
