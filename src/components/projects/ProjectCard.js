import projectList from "./ProjectList";
// import { useState } from "react";

function ProjectCard({ theme, outer_article_className }) {
  const article_header_className = `article-header ${
    theme ? "article-header-dark" : "article-header-light"
  }`;

  return (
    <body id="project">
      <h3>Projects</h3>
      <article className={outer_article_className}>
        <main class="container">
          <div class="grid">
            {projectList.map((project) => {
              const { id, name, description, github, video, techStack } =
                project;
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
                        <a href={github} target="_blank" rel="noreferrer">
                          Github
                        </a>
                      )}
                      {video && (
                        <a href={video} target="_blank" rel="noreferrer">
                          Video
                        </a>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </main>
      </article>
    </body>
  );
}

export default ProjectCard;
