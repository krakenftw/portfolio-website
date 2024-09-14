"use client";
import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function Github({ url }: { url: string }) {
  return (
    <div className="relative rounded-lg px-2 py-1 border w-fit border-slate-800 text-sm text-white/80 transition-transform duration-200 hover:-translate-y-1">
      <a href={url} className="flex items-center gap-2">
        <GitHubLogoIcon className="size-4" />
        github
      </a>
    </div>
  );
}

export default Github;
