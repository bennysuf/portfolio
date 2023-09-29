import projectList from "./ProjectList";
import {RxVideo} from "react-icons/rx"
import {PiGithubLogo} from "react-icons/pi"

function ProjectCard({ theme, outer_article_className }) {
  const link_className = `${theme ? "button-dark" : "button-light"}`;
  const article_header_className = `article-header ${
    theme ? "article-header-dark" : "article-header-light"
  }`;

  return (
    <body id="project">
      <h3>Projects</h3>
      <article className={outer_article_className}>
        <div class="grid">
          {projectList.map((project) => {
            const { id, name, description, github, video, techStack } = project;
            const techSkills = techStack.map((skill) => (
              <div className="skills">{skill}</div>
            ));
            return (
              <div key={id}>
                <article className="inner-article">
                  <header className={article_header_className}>{name}</header>
                  <div className="skill-container">{techSkills}</div>
                  <p>{description}</p>
                  <div className="portfolio-links">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className={link_className}
                        data-tooltip="Github"
                        data-placement="bottom"
                      >
                        <PiGithubLogo className="portfolio-icon"/>
                      </a>
                    )}
                    {video && (
                      <a
                      href={video}
                      target="_blank"
                      rel="noreferrer"
                        className={link_className}
                        data-tooltip="Video"
                        data-placement="bottom"
                        >
                        <RxVideo className="portfolio-icon"/>
                      </a>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </article>
    </body>
  );
}

export default ProjectCard;
