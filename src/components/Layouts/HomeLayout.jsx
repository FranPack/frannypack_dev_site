import React from "react";
import Header from "../Header";
import Socials from "../Socials";

const Home = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Socials />
    </>
  );
};

export default Home;
