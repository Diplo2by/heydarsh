import Image from "next/image";
import React from "react";
import python from "../public/assets/skills/python.webp";
import html from "../public/assets/skills/html.webp";
import github from "../public/assets/skills/github.webp";
import css from "../public/assets/skills/css3.webp";
import javascript from "../public/assets/skills/javascript.png";
import next from "../public/assets/skills/next.webp";
import rust from "../public/assets/skills/rust.png";
import tailwind from "../public/assets/skills/tailwind.webp";
import solidity from "../public/assets/skills/solidity.webp";
import metamask from "../public/assets/skills/metamask.webp";
import writing from "../public/assets/skills/writing.webp";
import java from "../public/assets/skills/java.webp";
import springboot from "../public/assets/skills/springboot.webp";
import githubactions from "../public/assets/skills/actions.webp";
import gcp from "../public/assets/skills/gcp.webp";
import fastApi from "../public/assets/skills/FastAPI.webp";

const Skills = () => {
  // Skill items
  const skillsList = [
    { name: "Java Script", icon: javascript },
    { name: "Next.js", icon: next },
    { name: "Python", icon: python },
    { name: "Fast API", icon: fastApi },
    { name: "Java", icon: java },
    { name: "Spring Boot", icon: springboot },
    { name: "GitHub Actions", icon: githubactions },
    { name: "Google Cloud Platform", icon: gcp },
    { name: "Tailwind", icon: tailwind },
    { name: "Solidity", icon: solidity },
    { name: "Rust", icon: rust },
    { name: "Content Curation", icon: writing },
  ];
  const blackIcons = ["GitHub Actions"];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e9]">
          Skills
        </p>
        <p className="py-4 font-bold text-2xl md:text-4xl">My Repertoire</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl dark:shadow-gray-600 rounded-xl hover:scale-125 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    height="64"
                    width="64"
                    src={skill.icon}
                    alt={`Skill ${skill.name}`}
                    className={
                      !blackIcons.includes(skill.name)
                        ? "dark:invert dark:brightness-0 dark:contrast-100"
                        : ""
                    }
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
