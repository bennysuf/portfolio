import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link smooth to="#home" data-tooltip="Home" data-placement="bottom">
            home
            {/* TODO add icon here instead of word */}
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="#project"
            data-tooltip="Projects"
            data-placement="bottom"
          >
            project
          </Link>
        </li>
        <li>
          <Link smooth to="#about" data-tooltip="About" data-placement="bottom">
            about
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="#contact"
            data-tooltip="Contact"
            data-placement="bottom"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
