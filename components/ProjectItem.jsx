import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl, techStack }) => {
  return (
    <div
      id="projectItem"
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-[#5651e9] to-[#709dff]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-full px-4 md:px-0 md:w-auto">
        <h3 className="text-sm md:text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-1 md:pb-4 md:pt-2 text-white text-center text-sm sm:text-base">
          {techStack}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-1 md:py-3 md:px-5 rounded-lg bg-white text-gray-700 font-bold text-sm sm:text-base md:text-lg cursor-pointer mx-auto max-w-[100px] md:max-w-[150px] dark:bg-gray-800 dark:text-gray-200">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
