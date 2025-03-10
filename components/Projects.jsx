import React, { useState } from "react";
import freeownImg from "../public/assets/projects/freeown3.png";
import medifyImg from "../public/assets/projects/medify2.png";
import easyImg from "../public/assets/projects/easy.png";
import lvlupImg from "../public/assets/projects/lvlup.png";
import ioptnImg from "../public/assets/projects/ioptn.png";
import ProjectItem from "./ProjectItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "IOPTN Portal",
      backgroundImg: ioptnImg,
      projectUrl: "/ioptn",
      techStack: "Hardhat",
    },
    {
      title: "Lvl UP Creators",
      backgroundImg: lvlupImg,
      projectUrl: "/lvlup",
      techStack: "Next Js",
    },
    {
      title: "Medify App",
      backgroundImg: medifyImg,
      projectUrl: "/medify",
      techStack: "Flutter",
    },
    {
      title: "FreeOwn",
      backgroundImg: freeownImg,
      projectUrl: "/freeown",
      techStack: "Next JS",
    },
    {
      title: "Easy CT",
      backgroundImg: easyImg,
      projectUrl: "/easyocr",
      techStack: "Easy OCR",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of projects to show at a time based on screen size
  const getVisibleProjects = () => {
    // For large screens, show 2 projects
    const visibleCount = 1;
    const startIndex = currentIndex;

    // Create a circular array to loop through projects
    const visibleProjects = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }

    return visibleProjects;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e9]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>

        <div className="relative">
          {/* Carousel navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Projects display */}
          <div className="grid md:grid-cols-1 px-20">
            {getVisibleProjects().map((project, idx) => (
              <ProjectItem
                key={`${project.title}-${idx}`}
                title={project.title}
                backgroundImg={project.backgroundImg}
                projectUrl={project.projectUrl}
                techStack={project.techStack}
              />
            ))}
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 w-3 rounded-full ${
                idx === currentIndex ? "bg-[#5651e9]" : "bg-gray-300"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
