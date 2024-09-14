"use client";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";

function Website({ names }: { names: string[] }) {
  return (
    <div className="flex gap-2 cursor-pointer">
      {names.map((eachName) => {
        return (
          <div
            className="bg-slate-900  rounded-lg px-2 py-1 text-white/60 text-xs flex items-center gap-2 border-slate-800 border"
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
