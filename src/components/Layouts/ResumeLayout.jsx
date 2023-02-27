import React from "react";
import Header from "../components/Header";
import Socials from "../Socials";

const ResumeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Socials />
    </>
  );
};

export default ResumeLayout;
