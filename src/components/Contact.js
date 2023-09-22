import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <body id="contact">
      <h3>Contact</h3>
      <article className="outer-article contact-container">
        <main class="container">
          <div class="grid">
            <div>
              <article className="inner-article">
                <AiOutlineMail className="contact-icon"/>
                <h4 className="contact-name">Bennysuf@gmail.com</h4>
                <a
                  role="button"
                  href="mailto:bennysuf@gmail.com"
                  className="contact-button"
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
                  className="contact-button"
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