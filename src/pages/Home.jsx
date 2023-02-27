import React from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import Welcome from "../components/Welcome";
import Hero from "../img/undraw.svg";
import "./pages.css";
const Home = () => {
  return (
    <>
      <HomeLayout>
        <Welcome />
        <div className="heroImage">
          <img src={Hero} alt="Coding Visual" />
        </div>
      </HomeLayout>
    </>
  );
};

export default Home;
