import React, { useEffect, useState } from "react";
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const getVisibleProjects = () => {
    const visibleCount = 1;
    const startIndex = currentIndex;

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

  // Touch event handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-scrolling effect (optional)
  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-12 sm:py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e9]">
          Projects
        </p>
        <h2 className="py-2 sm:py-4">What I've built</h2>

        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Carousel left */}
          <div className="absolute top-1/2 left-1 sm:left-4 transform -translate-y-1/2 z-10">
            <div
              onClick={prevSlide}
              className="p-1 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 hover:cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft size={16} className="sm:hidden" />
              <ChevronLeft size={24} className="hidden sm:block" />
            </div>
          </div>

          {/* Projects display */}
          <div className="px-8 sm:px-20">
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

          {/* Carousel Right */}
          <div className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 z-10">
            <div
              onClick={nextSlide}
              className="p-1 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 hover:cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight size={16} className="sm:hidden" />
              <ChevronRight size={24} className="hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
          {projects.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full hover:cursor-pointer
                ${idx === currentIndex ? "bg-[#5651e9]" : "bg-gray-300"}
              `}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
