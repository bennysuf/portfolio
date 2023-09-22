import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

function Header() {
  return (
    <body id="home">
      <h3>Benny Sufrin</h3>
      <h4>Full-stack Developer</h4>
      <div class="grid" className="header-buttons">
        <a
          href="https://github.com"
          role="button"
          target="_blank"
          rel="noreferrer"
          className="header-button"
        >
          Resume
        </a>
        <br />
        <a
          role="button"
          //   href="mailto:bennysuf@gmail.com"
          href="#contact"
          className="header-button"
        >
          Connect
        </a>
      </div>
      <div class="grid" className="header-icons">
        <a
          href="https://www.linkedin.com/in/bennysufrin/"
          // className="contact-button"
          target="_blank"
          rel="noreferrer"
          data-tooltip="LinkedIn"
          data-placement="bottom"
        >
          <TbBrandLinkedin className="header-icon" />
        </a>
        <a
          href="https://github.com/bennysuf"
          // className="contact-button"
          target="_blank"
          rel="noreferrer"
          data-tooltip="Github"
          data-placement="bottom"
        >
          <FiGithub className="header-icon" />
        </a>
        <a
          href="mailto:bennysuf@gmail.com"
          data-tooltip="Email"
          data-placement="bottom"
          // className="contact-button"
        >
          <MdOutlineMail className="header-icon" />
        </a>
      </div>
    </body>
  );
}

export default Header;
