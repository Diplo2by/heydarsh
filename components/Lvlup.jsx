import React from "react";
import ProjectPage from "./ProjectPage";
import lvlupProject from "./projects/lvlup/meta";

const Lvlup = () => {
  return <ProjectPage {...lvlupProject} pageTitle="Projects - LvL Up Creators" />;
};

export default Lvlup;
