import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

function Contact({ outer_article_className, theme }) {
  const button_className = `contact-button ${
    theme ? "button-dark" : "button-light"
  }`;

  return (
    <body id="contact">
      <h3 className="header">Contact</h3>
      <article className={outer_article_className}>
        <div class="grid">
          <div>
            <article className="inner-article">
              <AiOutlineMail className="contact-icon" />
              <h4 className="contact-name">bennysuf@gmail.com</h4>
              <a
                role="button"
                href="mailto:bennysuf@gmail.com"
                className={button_className}
              >
                Let's chat
              </a>
            </article>
          </div>
          <div>
            <article className="inner-article">
              <AiOutlineLinkedin className="contact-icon" />
              <h4 className="contact-name">Benny Sufrin</h4>
              <a
                role="button"
                href="https://www.linkedin.com/in/bennysufrin/"
                className={button_className}
                target="_blank"
                rel="noreferrer"
              >
                Let's connect
              </a>
            </article>
          </div>
          <div>
            <article className="inner-article">
              <ImWhatsapp className="contact-icon" />
              <h4 className="contact-name">(347)-833-7852</h4>
              <a
                role="button"
                href="https://api.whatsapp.com/send?phone=3478337852&text=Hey Benny, let's connect!"
                className={button_className}
                target="_blank"
                rel="noreferrer"
              >
                Message
              </a>
            </article>
          </div>
        </div>
      </article>
    </body>
  );
}

export default Contact;
