import { Link } from "react-router-dom";
import "./components.css";
const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-container">
          <nav className="d-flex">
            <div className="d-flex">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </div>
          </nav>
          <Link className="nav-link logo" to="/">
            <img src="/Port-Logo.gif" alt="Logo" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
