import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact({outer_article_className, theme}) {

  const button_className = `contact-button ${theme ? "button-dark" : "button-light"}`

  return (
    <body id="contact">
      <h3>Contact</h3>
      <article className={outer_article_className}>
        <main class="container">
          <div class="grid">
            <div>
              <article className="inner-article">
                <AiOutlineMail className="contact-icon"/>
                <h4 className="contact-name">Bennysuf@gmail.com</h4>
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
                <AiOutlineLinkedin className="contact-icon"/>
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
          </div>
        </main>
      </article>
    </body>
  );
}

export default Contact;