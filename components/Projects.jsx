import React from "react";
import freeownImg from "../public/assets/projects/freeown2.png";
import medifyImg from "../public/assets/projects/medify.png";
import ProjectItem from "./ProjectItem";
import easyImg from "../public/assets/projects/easy.png"
import lvlupImg from "../public/assets/projects/lvlup.png"
import ioptnImg from '../public/assets/projects/ioptn.png'
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e9]">
          Projects
        </p>
        <h2 className="py-4"> What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="IOPTN Portal"
            backgroundImg={ioptnImg}
            projectUrl="/ioptn"
            techStack="Hardhat"
          />
          <ProjectItem
            title="Lvl UP Creators"
            backgroundImg={lvlupImg}
            projectUrl="/lvlup"
            techStack="Next Js"
          />
          <ProjectItem
            title="Medify App"
            backgroundImg={medifyImg}
            projectUrl="/medify"
            techStack="Flutter"
          />
          <ProjectItem
            title="FreeOwn"
            backgroundImg={freeownImg}
            projectUrl="/freeown"
            techStack="Next JS"
          />
          <ProjectItem
            title="Easy CT"
            backgroundImg={easyImg}
            projectUrl="/easyocr"
            techStack="Easy OCR"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
