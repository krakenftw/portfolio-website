import Image from "next/image";
import profilePic from "../../public/profile-pic.png";
import { OnlineTag } from "@/components/onlineTag";
import Link from "next/link";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className=" dark:bg-grid-white/50 bg-grid-white/15 min-h-screen w-screen flex gap-10 md:gap-2 flex-col md:flex-row">
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="w-full   flex flex-col gap-10 items-center justify-center">
        <div className="   relative flex items-center justify-center"></div>{" "}
        <Image
          src={profilePic}
          alt="Ah, it didnt load :("
          width={"320"}
          height={"320"}
        ></Image>
        <div>
          <OnlineTag />
          <div className=" flex w-[320px] flex-col gap-4">
            <div className="text-6xl leading-[60px] font-bold z-10">
              <strong>Hey, 👋🏻</strong>
              <br /> I am <strong className="text-[#f0ed78]">kraken</strong>
            </div>
            <div className="m-0 text-lg z-10 text-gray-400">
              Full Stack Developer crafting sleek and modern web applications.
            </div>
            <div className="z-10 flex gap-5">
              <Link href={"https://github.com/krakenftw"}>
                <p className="underline z-10">Github</p>
              </Link>

              <Link href={"https://linkedin.com/in/gaurav0wasd"}>
                <p className="underline z-10">Linkedin</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Project />
    </div>
  );
}
