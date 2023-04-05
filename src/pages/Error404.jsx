import React from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import "./pages.css";
import NotFound from "../img/not_found.svg"
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
      <HomeLayout>
        <div className="not-found-container">
          <img src={NotFound} alt="Page Not Found" className="not-found-img"/>
          <h1 className="not-found-title">
            Page not found
          </h1>
          <Link to="/" className="not-found-btn">Back to Safety</Link>
        </div>
      </HomeLayout>
  );
};

export default Error404;