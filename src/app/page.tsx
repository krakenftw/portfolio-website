"use client";
import Image from "next/image";
import profilePic from "../../public/profile-pic.png";
import Project from "@/components/Project";
import FreelanceProject from "@/components/FreelanceProject";
import { Dock, DockIcon } from "@/components/Dock";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { FaHome } from "react-icons/fa";
import { useTheme } from "next-themes";
import AnimateOnLoad from "@/components/AnimateOnLoad";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen text-primary w-screen flex items-center py-[50px] md:py-[150px] gap-10 flex-col">
      <div
        className={`${
          theme == "dark" ? "fixed" : "hidden"
        } top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
      ></div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="w-4/5 md:w-3/5 lg:w-2/5 flex flex-col  gap-5 justify-center">
        <AnimateOnLoad delay={0.3}>
          <div className="w-full flex items-center justify-center my-2 md:justify-start">
            <div className="w-[220px] h-[220px] border-border rounded-full border-2">
              <Image
                src={profilePic}
                alt="Ah, it didnt load :("
                width={"220"}
                height={"220"}
                className="rounded-full border-transparent border-4"
              ></Image>
            </div>
          </div>
          <div className="w-full">
            <div className=" flex flex-col items-center md:items-start gap-4">
              <div className="text-4xl md:text-5xl leading-[60px] font-bold z-10">
                Hey, I&apos;m gaurav 👋🏻
              </div>
              <div className="m-0 text-md z-10 text-gray-400">
                🚀 Full stack developer exploring open source, always looking
                for new challenges and building innovative projects from the
                ground up. Passionate about creating clean, efficient code that
                makes a difference. When i&apos;m not coding, you&apos;ll find
                me deep into a chess match, strategizing my next move.
              </div>
            </div>
          </div>
        </AnimateOnLoad>
        <hr className="border-0 border-t border-t-slate-800 my-4" />

        <AnimateOnLoad delay={0.4}>
          <Project />
        </AnimateOnLoad>
        <hr className="border-0 border-t border-t-slate-800 my-4" />

        <AnimateOnLoad delay={0.5}>
          <FreelanceProject />
        </AnimateOnLoad>
        <hr className="border-0 border-t border-t-slate-800 my-4" />
        <div className="text-primary">
          want to chat? hit me up at{" "}
          <a className="underline" href="mailto:gauraverma4114@gmail.com">
            gauraverma4114@gmail.com
          </a>
        </div>
      </div>
      <Dock direction="middle" className="fixed bottom-5">
        <DockIcon>
          <FaHome className="size-6" />
        </DockIcon>
        <DockIcon>
          <GitHubLogoIcon className="size-6" />
        </DockIcon>
        <DockIcon>
          <LinkedInLogoIcon className="size-6" />
        </DockIcon>
        <div className="text-primary">|</div>
        <DockIcon>
          {theme == "dark" ? (
            <SunIcon onClick={() => setTheme("light")} className="size-6" />
          ) : (
            <MoonIcon onClick={() => setTheme("dark")} className="size-6" />
          )}
        </DockIcon>
      </Dock>
    </div>
  );
}
