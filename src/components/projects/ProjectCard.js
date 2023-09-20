import projectList from "./ProjectList";

function ProjectCard() {
    return ( 
        <section>
            <h3>Projects</h3>
            <article>
                {projectList.map((project) => {
                    return (
                        <>
                        {project.name}
                        </>
                    )
                })}
            </article>
        </section>
     );
}

export default ProjectCard;