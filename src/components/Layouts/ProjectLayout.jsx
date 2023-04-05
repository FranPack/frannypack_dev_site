import React from "react";
import Header from "../Header";
import Socials from "../Socials";

const ProjectLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Socials />
    </>
  );
};

export default ProjectLayout;