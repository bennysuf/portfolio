import skillSet from "./Skills";

function ExperienceCard({ outer_article_className }) {
  return (
    <body id="experience">
      <h3 className="header">Technical Stack</h3>
      <article className={outer_article_className}>
        <article className="inner-article experience-container">
          {skillSet.map((skill) => {
            const { id, name, icon, type, catagory } = skill;
            return (
              <div key={id}>
                {icon} {` ${name}`}
                <br />
              </div>
            );
          })}
        </article>
      </article>
    </body>
  );
}

export default ExperienceCard;
