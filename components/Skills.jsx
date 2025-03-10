import Image from "next/image";
import React from "react";
import python from "../public/assets/skills/python.png";
import html from "../public/assets/skills/html.png";
import github from "../public/assets/skills/github.png";
import css from "../public/assets/skills/css3.png";
import javascript from "../public/assets/skills/javascript.png";
import next from "../public/assets/skills/next.png";
import rust from "../public/assets/skills/rust.png";
import tailwind from "../public/assets/skills/tailwind.png";
import solidity from "../public/assets/skills/solidity.png";
import metamask from "../public/assets/skills/metamask.png";
import writing from "../public/assets/skills/writing.png";
// import java from "../public/assets/skills/java.png";
// import springboot from "../public/assets/skills/springboot.png";
// import githubactions from "../public/assets/skills/githubactions.png";
// import gcp from "../public/assets/skills/gcp.png";

const Skills = () => {
  // Skill items
  const skillsList = [
    { name: "Python", icon: python },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Java Script", icon: javascript },
    { name: "Next.js", icon: next },
    { name: "Tailwind", icon: tailwind },
    { name: "Solidity", icon: solidity },
    { name: "Rust", icon: rust },
    { name: "Meta Mask", icon: metamask },
    { name: "Content Curation", icon: writing },
    // { name: "Java", icon: java },
    // { name: "Spring Boot", icon: springboot },
    // { name: "GitHub Actions", icon: githubactions },
    // { name: "GCP", icon: gcp },
    // { name: "GitHub", icon: github },
  ];

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
              className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    height="64"
                    width="64"
                    src={skill.icon}
                    alt={`Skill ${skill.name}`}
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
