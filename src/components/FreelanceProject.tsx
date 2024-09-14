import React from "react";
import Website from "./Website";
import EachTool from "./EachTool";

function FreelanceProject() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex gap-2 flex-col">
        <h1 className="text-4xl font-semibold">Freelance Projects</h1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold">goblino.bot</span>
            <div className="flex gap-2">
              <Website url="https://goblino.bot" />
            </div>
          </div>
          <span className="text-gray-400">
            as a solo developer, i crafted goblino bot: a revolutionary
            discord-based platform for online currency trading. my creation
            seamlessly integrates a custom website and bot, offering users a
            secure and efficient experience. leveraging cutting-edge tech, i
            built a scalable solution with stripe for payments and github
            actions for smooth deployment. this project showcases my ability to
            develop complex, user-friendly systems that bridge social platforms
            and digital finance.
          </span>
          <EachTool
            names={[
              "Node",
              "Discord.js",
              "PostgreSQL",
              "Prisma",
              "Stripe",
              "React",
              "Express.js",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default FreelanceProject;
