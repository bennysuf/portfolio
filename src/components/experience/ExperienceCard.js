import skillSet from "./Skills";

function ExperienceCard() {
  return (
    <body id="experience">
      <h3>Technical Skills</h3>
      <article className="outer-article">
        <main class="container">
          <article className="inner-article">
            {skillSet.map((skill) => {
              return (
                <div key={skill.id}>
                  {skill.name}
                  <br />
                </div>
              );
            })}
          </article>
        </main>
      </article>
    </body>
  );
}

export default ExperienceCard;
