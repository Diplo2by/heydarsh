import Image from "next/image";
import React from "react";
import python from "../public/assets/skills/python.png";
import c from "../public/assets/skills/c.png";
import html from "../public/assets/skills/html.png";
import github from "../public/assets/skills/github.png";
import css from "../public/assets/skills/css3.png";
import javascript from "../public/assets/skills/javascript.png";
import next from "../public/assets/skills/next.png";
import rust from "../public/assets/skills/rust.png";
import tailwind from "../public/assets/skills/tailwind.png";
import solidity from "../public/assets/skills/solidity.png";
import tensorflow from "../public/assets/skills/tensorflow.png";
import ipfs from "../public/assets/skills/ipfs.png";
import metamask from "../public/assets/skills/metamask.png";
import writing from "../public/assets/skills/writing.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e9]">
          Skills
        </p>
        <h2 className="py-4">My Repertoire</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={python} alt="Skill Python" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={c} alt="Skill C" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={html} alt="Skill HTML" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={css} alt="Skill CSS" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  height="64"
                  width="64"
                  src={javascript}
                  alt="Skill JavaScript"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={next} alt="Skill Next.js" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  height="64"
                  width="64"
                  src={tailwind}
                  alt="Skill Tailwind"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  height="64"
                  width="64"
                  src={solidity}
                  alt="Skill Solidity"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Solidity</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={rust} alt="Skill Rust" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Rust</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={ipfs} alt="Skill IPFS" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>IPFS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  height="64"
                  width="64"
                  src={metamask}
                  alt="Skill Metamask"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MetaMask</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  height="64"
                  width="64"
                  src={tensorflow}
                  alt="Skill Tensorflow"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tensorflow</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image height="64" width="64" src={github} alt="Skill GitHub" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  height="64"
                  width="64"
                  src={writing}
                  alt="Skill writing"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Content Curation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
