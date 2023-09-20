import skillSet from "./Skills";

function ExperienceCard() {
  return (
    <body>
      <h3>Technical Skills</h3>
      <article>
        <main class="container">
          {skillSet.map((skill) => {
            return (
              <>
                {skill.name}
                <br />
              </>
            );
          })}
        </main>
      </article>
    </body>
  );
}

export default ExperienceCard;
