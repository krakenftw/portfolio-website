"use client";
import EachTool from "./EachTool";
import Github from "./Github";
import Website from "./Website";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex gap-2 flex-col">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <span className="text-slate-500">i like building stuff</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="relative text-xl font-semibold">imglyx</span>
            <div className="flex gap-2">
              <Website url="https://imglyx.krak.codes" />
              <Github url="https://www.github.com/krakenftw" />
            </div>
          </div>
          <span className="text-gray-400">
            Imglyx is a text-to-image generation platform with multimodal
            support, allowing users to generate both public and private images.
            The platform features an explore page where users can view community
            creations and a coin-based system for accessing advanced features.
            With a focus on user experience, Imglyx combines a clean,
            professional UI with powerful image generation capabilities,
            providing an accessible tool for creative expression.{" "}
          </span>
          <EachTool
            names={[
              "Next.js",
              "PostgreSQL",
              "Prisma",
              "Zustand",
              "TailwindCSS",
              "Shadcn UI",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold">invouge.ai</span>
            <div className="flex gap-2">
              <Github url="https://github.com/krakenftw/invouge-v2" />
            </div>
          </div>
          <span className="text-gray-400">
            Engineered a sophisticated user training solution utilizing
            Retrieval-Augmented Generation (RAG) architecture to deliver precise
            and effective responses. Integrated Langchain and vector databases
            to enable advanced natural language processing capabilities.
            Designed an intuitive, user-centric interface to enhance customer
            support and employed Docker and GitHub Actions to streamline
            continuous integration and delivery processes.{" "}
          </span>
          <EachTool
            names={[
              "Next.js",
              "Langchain",
              "PGVector",
              "Drizzle",
              "TailwindCSS",
              "Shadcn UI",
              "Open AI",
              "Groq",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
