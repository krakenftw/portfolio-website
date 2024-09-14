import {
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import React from "react";

function Dock() {
  return (
    <div className="fixed flex items-center justify-center gap-4 bottom-5 shadow-xl bg-slate-900 px-4 py-4  rounded-lg border border-slate-600">
      <a
        href="https://www.krak.codes"
        className=" items-center justify-center flex"
      >
        <HomeIcon className="size-5" />
      </a>
      <a
        href="https://www.github.com/krakenftw"
        className="items-center justify-center flex"
      >
        <GitHubLogoIcon className="size-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/gaurav0wasd/"
        className="items-center justify-center flex"
      >
        <LinkedInLogoIcon className="size-5" />
      </a>
      <div className="h-full text-slate-400">|</div>
      <button className="items-center justify-center flex">
        <SunIcon className="size-5" />
      </button>
    </div>
  );
}

export default Dock;
