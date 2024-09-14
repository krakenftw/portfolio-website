import Image from "next/image";
import profilePic from "../../public/profile-pic.png";
import Project from "@/components/Project";
import FreelanceProject from "@/components/FreelanceProject";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <div className="min-h-screen  w-screen flex items-center py-[50px] md:py-[150px] gap-10 flex-col">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="fixed bottom-0 z-[-1] h-[100px] w-screen bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="w-4/5 md:w-3/5 lg:w-2/5 flex flex-col gap-5 justify-center">
        <div className="w-[220px] h-[220px] border-yellow-300 rounded-full border-2">
          <Image
            src={profilePic}
            alt="Ah, it didnt load :("
            width={"220"}
            height={"220"}
            className="rounded-full border-black border-4"
          ></Image>
        </div>
        <div className="w-full">
          <div className=" flex flex-col gap-4">
            <div className="text-5xl leading-[60px] font-bold z-10">
              hey, i am gaurav 👋🏻
            </div>
            <div className="m-0 text-md z-10 text-gray-400">
              🚀 full stack developer exploring open source, always looking for
              new challenges and building innovative projects from the ground
              up. passionate about creating clean, efficient code that makes a
              difference. when i&apos;m not coding, you&apos;ll find me deep
              into a chess match, strategizing my next move.
            </div>
          </div>
        </div>
        <hr className="border-0 border-t border-t-slate-800 my-4" />

        <Project />
        <hr className="border-0 border-t border-t-slate-800 my-4" />
        <FreelanceProject />
        <hr className="border-0 border-t border-t-slate-800 my-4" />
        <div className="text-slate-200">
          want to chat? hit me up at{" "}
          <a className="underline" href="mailto:gauraverma4114@gmail.com">
            gauraverma4114@gmail.com
          </a>
        </div>
      </div>
      <Dock />
    </div>
  );
}
