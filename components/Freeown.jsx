import React from "react";
import ProjectPage from "./ProjectPage";
import freeownProject from "./projects/freeown/meta";

const Freeown = () => {
  return <ProjectPage {...freeownProject} pageTitle="Projects - FreeOwn" />;
};

export default Freeown;
