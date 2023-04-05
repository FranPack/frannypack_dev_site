import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../public/img/Port-Logo.gif"
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <nav className="nav d-flex">
          <div className="d-flex">
            <Link className="nav-link" href="/projects">
              Projects
            </Link>
            <Link className="nav-link" href="/resume">
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
            href=""
          >
            {isNavExpanded ? <FontAwesomeIcon icon={faBars} className="hamburger-icon" /> : <FontAwesomeIcon icon={faClose} className="hamburger-icon" />}
          </Link>
          <ul className={`menu-nav${isNavExpanded ? '' : ' show-menu'}`}>
            <li>
              <Link className="nav-link" href="/projects" onClick={() => setIsNavExpanded(false)}>
              Projects
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/resume" onClick={() => setIsNavExpanded(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="nav-link logo" href="/">
            <Image src={Logo} alt="Logo"/>
        </Link>
      </div>
    </div>
  );
};

export default Header;
