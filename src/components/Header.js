import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

function Header({theme}) {

  const button_className = `header-button ${theme ? "button-dark" : "button-light"}`
  const icons_className = `header-icons ${theme ? "header-icons-dark" : "header-icons-light"}`

  return (
    <body id="home">
      <h1 style={{marginBottom: "20px"}}>Benny Sufrin</h1>
      <h3>Full-stack Developer</h3>
      <div class="grid" className="header-buttons">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vS3i-3O0XZbbNBZ9tPTCr068-8lmi__pcH5rocFyneGl0UkKvZqCdNd3uN8kL2Ij_ZhdZUQ67bxx4GR/pub"
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
