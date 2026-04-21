import React from "react";
import ProjectPage from "./ProjectPage";
import medifyProject from "./projects/medify/meta";

const Medify = () => {
  return <ProjectPage {...medifyProject} pageTitle="Projects - Medify" />;
};

export default Medify;
