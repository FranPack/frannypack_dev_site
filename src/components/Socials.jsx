import Link  from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
  return (
    <>
      <div className="footer">
          <div className="react-container">
            <span className="credit">
              Powered by React{" "}
              <FontAwesomeIcon icon={faReact} className="react-icon" />
            </span>
          </div>
          <div className="socials">
            <Link href="mailto:fmrivera30@ymail.com">
              <FontAwesomeIcon icon={faAt} className="social-icon" />
            </Link>
            <Link href="https://github.com/FranPack">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/fran-rivera/">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </Link>
          </div>
      </div>
    </>
  );
};

export default Socials;
