import { HashLink as Link } from "react-router-hash-link";
import { FiHome } from "react-icons/fi";
import { PiCodeBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import {PiStackBold} from "react-icons/pi";

function NavBar({theme}) {

  const navbar_className = `navbar ${theme ? "button-dark" : "button-light"}`

  return (
    <nav className={navbar_className}>
      <ul>
        <li key="home">
          <Link smooth to="#home" data-tooltip="Home" data-placement="bottom">
            <FiHome className="nav-icon"/>
          </Link>
        </li>
        <li key="project">
          <Link
            smooth
            to="#project"
            data-tooltip="Projects"
            data-placement="bottom"
          >
            <PiCodeBold className="nav-icon"/>
          </Link>
        </li>
        <li key="experience">
          <Link
            smooth
            to="#experience"
            data-tooltip="Tech stack"
            data-placement="bottom"
          >
            <PiStackBold className="nav-icon"/>
          </Link>
        </li>
        <li key="about">
          <Link smooth to="#about" data-tooltip="About" data-placement="bottom">
            <FaRegUser className="nav-icon"/>
          </Link>
        </li>
        <li key="contact">
          <Link
            smooth
            to="#contact"
            data-tooltip="Contact"
            data-placement="bottom"
          >
            <FaRegEnvelope className="nav-icon"/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
