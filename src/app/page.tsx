import DotPattern from "@/components/DotPattern";
import Image from "next/image";
import profilePic from "../../public/profile-pic.png";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
      <DotPattern
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        height={30}
        width={30}
      />
      <Image
        src={profilePic}
        alt="Ah, it didnt load :("
        width={"280"}
        height={"280"}
      ></Image>

      <div className="text-6xl leading-[60px] font-bold">
        <strong>Hey, 👋🏻</strong>
        <br /> I am kraken
      </div>
    </div>
  );
}
