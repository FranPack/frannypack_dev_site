import React from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";

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
