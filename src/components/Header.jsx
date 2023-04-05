import { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <nav className="nav d-flex">
          <div className="d-flex">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </div>
        </nav>
        <nav className="mobile-nav">
          <Link
            className="hamburger nav-link"
            onClick={() => {
              setIsNavExpanded((prev) => !prev) ;
            }}
          >
            {isNavExpanded ? <FontAwesomeIcon icon={faBars} className="hamburger-icon" /> : <FontAwesomeIcon icon={faClose} className="hamburger-icon" />}
          </Link>
          <ul className={`menu-nav${isNavExpanded ? '' : ' show-menu'}`}>
            <li>
              <Link className="nav-link" to="/projects" onClick={() => setIsNavExpanded(false)}>
              Projects
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resume" onClick={() => setIsNavExpanded(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="nav-link logo" to="/">
          <img src="/Port-Logo.gif" alt="Logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
