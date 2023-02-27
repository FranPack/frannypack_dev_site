import React from "react";
import PortfolioLayout from "../components/Layouts/PortfolioLayout";
import ProjectList from "../components/ProjectList";
import "./pages.css";

const Portfolio = () => {
  return (
    <>
      <PortfolioLayout>
        <ProjectList/>
      </PortfolioLayout>
    </>
  );
};

export default Portfolio;
