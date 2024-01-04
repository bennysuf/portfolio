import About from "./About";
import Contact from "./Contact";
import NavBar from "./Nav";
import ProjectCard from "./projects/ProjectCard";
import ExperienceCard from "./experience/ExperienceCard";
import Header from "./Header";
import "@picocss/pico/css/pico.min.css";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)")
  );

  useEffect(() => {
    setTheme(window.matchMedia("(prefers-color-scheme: dark)"));
  }, []);

  // const theme = document.getElementsByTagName("html")
  // console.log("app", theme[0].dataset);
  // theme[0].dataset.theme = "dark"

  // const theme = window.matchMedia('(prefers-color-scheme: dark)') // gives a boolean value
  // console.log("theme", theme);

  const outer_article_className = `outer-article ${
    theme.matches ? "outer-article-dark" : "outer-article-light"
  }`;

  return (
    <div id="app">
      <NavBar theme={theme.matches}/>
      <Header theme={theme.matches} />
      <ProjectCard
        theme={theme.matches}
        outer_article_className={outer_article_className}
      />
      <ExperienceCard outer_article_className={outer_article_className} />
      <About outer_article_className={outer_article_className} />
      <Contact outer_article_className={outer_article_className} theme={theme.matches}/>
    </div>
  );
}

export default App;

// TODO have fake drop down with a down or up arrow, when clicked, change state, ternary to see if arrow is up or down, display card or a bar with component title
// TODO make filter for tech stack
// TODO remove dark mode color theme

//? how to import a pdf file into component?