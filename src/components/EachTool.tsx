"use client";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";

function Website({ names }: { names: string[] }) {
  return (
    <div className="flex gap-2 cursor-pointer max-w-full flex-wrap">
      {names.map((eachName) => {
        return (
          <div
            className="bg-secondary mb-2 break-words rounded-lg px-2 py-1 text-primary/80 text-xs flex items-center gap-2 border-slate-800 border"
            key={eachName}
          >
            {eachName}
          </div>
        );
      })}
    </div>
  );
}

export default Website;
