import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

function Header({theme}) {

  const button_className = `header-button ${theme ? "button-dark" : "button-light"}`
  const icons_className = `header-icons ${theme ? "header-icons-dark" : "header-icons-light"}`

  return (
    <body id="home">
      <h4>Hi, I'm</h4>
      <h2>Benny Sufrin.</h2>
      <h4>I build things as a</h4>
      <h3>Full-stack Developer.</h3>
      <div class="grid" className="header-buttons">
        <a
          href="https://github.com"
          // TODO add resume link
          role="button"
          target="_blank"
          rel="noreferrer"
          className={button_className}
        >
          Resume
        </a>
        <br />
        <a
          role="button"
          href="#contact"
          className={button_className}
        >
          Connect
        </a>
      </div>
      <div class="grid" className={icons_className}>
        <a
          href="https://www.linkedin.com/in/bennysufrin/"
          target="_blank"
          rel="noreferrer"
          data-tooltip="LinkedIn"
          data-placement="bottom"
        >
          <TbBrandLinkedin className="header-icon" />
        </a>
        <a
          href="https://github.com/bennysuf"
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
        >
          <MdOutlineMail className="header-icon" />
        </a>
      </div>
    </body>
  );
}

export default Header;
