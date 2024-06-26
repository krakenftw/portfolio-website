"use client";
import {
  cibAngular,
  cibDocker,
  cibJava,
  cibKubernetes,
  cibNextJs,
  cibNodeJs,
  cibReact,
  cibSvelte,
  cibTypescript,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
export default function TechStack() {
  return (
    <div className="w-2/3 mid:w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">Current stack</p>
        <div className="[&>*]:w-10 fill-white flex gap-3">
          <CIcon icon={cibTypescript} />
          <CIcon icon={cibNextJs} />
          <CIcon icon={cibNodeJs} />
          <CIcon icon={cibReact} />
          <CIcon icon={cibDocker} />
          <CIcon icon={cibJava} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">Currently Learning</p>
        <div className="[&>*]:w-10 fill-white flex gap-3">
          <CIcon icon={cibSvelte} />
          <CIcon icon={cibKubernetes} />
        </div>
      </div>
    </div>
  );
}
