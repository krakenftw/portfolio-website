import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import TechStack from "./Techstack";

export default function Project() {
  return (
    <div className="w-full z-10 h-full md:h-screen py-10 flex flex-col gap-8 items-center justify-center">
      <div className="bg-black cursor-pointer w-3/4 md:w-2/3 flex flex-col gap-4 border-[1px] border-gray-500 p-4 rounded-lg top-0  relative hover:top-[-5px] shadow-none hover:shadow-gray-600 hover:shadow-md transition-all">
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
      <div className="bg-black w-3/4 md:w-2/3 flex cursor-pointer flex-col gap-4 border-[1px] border-gray-500 p-4 rounded-lg top-0  relative hover:top-[-5px] shadow-none hover:shadow-gray-600 hover:shadow-md transition-all">
        <Link
          href={"https://www.github.com/krakenftw/invougeChat"}
          className="relative"
        >
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ArrowRightIcon className="font-bold" color="#f0ed78" /> InvougeChat{" "}
          </h1>
          <p>
            Developed a chatbot with AI, implementing RAG Arch. and answering
            question blazingly fast
          </p>
          <ExternalLinkIcon className="absolute top-0 right-0" />
        </Link>
      </div>
      <TechStack />{" "}
    </div>
  );
}
