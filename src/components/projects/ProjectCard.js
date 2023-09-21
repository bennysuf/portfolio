import projectList from "./ProjectList";

function ProjectCard() {
  return (
    <body id="project">
      <h3>Projects</h3>
      {/* <article className="card-grid"> */}
      <article className="outer-article">
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
                    <header className="article-header">{name}</header>
                    <div className="skill-container">{techSkills}</div>
                    <p>{description}</p>
                    <div className="portfolio_links">
                      {github && (
                        <a
                          href={github}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      )}
                      {video && (
                        <a
                          href={video}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
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
