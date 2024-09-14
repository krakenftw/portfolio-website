"use client";
import React from "react";
import { GlobeIcon } from "@radix-ui/react-icons";

function Website({ url }: { url: string }) {
  return (
    <div className="relative rounded-lg px-2 py-1 border w-fit border-slate-800 text-sm text-white/80 transition-transform duration-200 hover:-translate-y-1">
      <a href={url} className="flex items-center gap-2">
        <GlobeIcon className="size-4" />
        website
      </a>
    </div>
  );
}

export default Website;
