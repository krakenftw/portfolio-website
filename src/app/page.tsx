import Image from "next/image";
import profilePic from "../../public/profile-pic.png";
import { OnlineTag } from "@/components/onlineTag";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import TechStack from "@/components/Techstack";

export default function Home() {
  return (
    <div className=" dark:bg-grid-white/[0.2] bg-grid-white/[0.2] h-screen w-screen flex flex-col md:flex-row ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="w-1/2 px-1/2 md:w-full flex flex-col gap-10 items-center justify-center">
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
      <div className="w-1/2 md:w-full z-10 h-screen flex flex-col gap-8 items-center justify-center">
        <div className="bg-black cursor-pointer w-2/3 flex flex-col gap-4 border-[1px] border-gray-500 p-4 rounded-lg">
          <Link
            href={"https://www.fiverr.com/gaurav_verma_"}
            className="relative"
          >
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <ArrowRightIcon className="font-bold" color="#f0ed78" /> Freelance
              Experience
            </h1>
            <p>
              I have freelanced as a Node.js developer (discord.js) on Fiverr,
              earning over 100 five-star reviews for delivering high-quality,
              reliable, and innovative solutions.
            </p>
            <ExternalLinkIcon className="absolute top-0 right-0" />
          </Link>
        </div>
        <div className="bg-black w-2/3 flex cursor-pointer flex-col gap-4 border-[1px] border-gray-500 p-4 rounded-lg">
          <Link
            href={"https://www.github.com/krakenftw/invougeChat"}
            className="relative"
          >
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <ArrowRightIcon className="font-bold" color="#f0ed78" />{" "}
              InvougeChat{" "}
            </h1>
            <p>
              Developed a chatbot with AI, implementing RAG Arch. and answering
              question blazingly fast
            </p>
            <ExternalLinkIcon className="absolute top-0 right-0" />
          </Link>
        </div>
        <TechStack />
      </div>
    </div>
  );
}
