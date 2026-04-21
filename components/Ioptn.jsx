import React from "react";
import ProjectPage from "./ProjectPage";
import ioptnProject from "./projects/ioptn/meta";

const Ioptn = () => {
  return <ProjectPage {...ioptnProject} pageTitle="Projects - IOPTN Portal" />;
};

export default Ioptn;
