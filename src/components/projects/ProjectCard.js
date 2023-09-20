import projectList from "./ProjectList";

function ProjectCard() {
  return (
    <body>
      <h3>Projects</h3>
      <article className="card-grid">
        <main class="container">
          <div class="grid">
            {projectList.map((project) => {
              const { name, description, link, video } = project;
              return (
                <div>
                  <article>
                    <header>{name}</header>
                    <p>{description}</p>
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
