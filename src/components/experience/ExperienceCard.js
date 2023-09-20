import skillSet from "./Skills";

function ExperienceCard() {
  return (
    <section>
      <h3>Technical Skills</h3>
      <article>
        {skillSet.map((skill) => {
          return (
            <>
              {skill.name}
              <br />
            </>
          );
        })}
      </article>
    </section>
  );
}

export default ExperienceCard;
