function About({ outer_article_className }) {
  return (
    <body id="about">
      <h3 className="header">About Me</h3>
      <article className={outer_article_className}>
        <article className="inner-article">
          <p className="about-paragraph">
            Passionate Full-Stack Developer with a creative flair, stemming from
            a background in photography. Proficient in Photoshop and image
            compositing. Adept at conceiving, refining, and troubleshooting
            projects. IDF veteran with proven ability to excel under pressure,
            collaborate in teams, and swiftly adapt. Quick learner with strong
            hands-on skills, consistently delivering results.
          </p>
        </article>
      </article>
    </body>
  );
}

export default About;
