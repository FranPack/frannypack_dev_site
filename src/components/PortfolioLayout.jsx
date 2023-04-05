import React from "react";
import Header from "./Header";
import Socials from "./Socials";

const PortfolioLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Socials />
    </>
  );
};

export default PortfolioLayout;
