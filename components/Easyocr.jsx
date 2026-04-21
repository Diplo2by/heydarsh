import React from "react";
import ProjectPage from "./ProjectPage";
import easyocrProject from "./projects/easyocr/meta";

const Easyocr = () => {
  return (
    <ProjectPage
      {...easyocrProject}
      pageTitle="Projects - Chinese Character Recognition"
    />
  );
};

export default Easyocr;
