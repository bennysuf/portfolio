import About from "./About";
import Contact from "./Contact";
import NavBar from "./Nav";
import ProjectCard from "./projects/ProjectCard";
import ExperienceCard from "./experience/ExperienceCard";
import Header from "./Header";
import "@picocss/pico/css/pico.min.css";
import {useState, useEffect} from "react"

function App() {
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)'))

  useEffect(()=> {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)'))
  }, [])

  // const theme = document.getElementsByTagName("html")
  // console.log("app", theme[0].dataset);
  // theme[0].dataset.theme = "dark"

  // const theme = window.matchMedia('(prefers-color-scheme: dark)') // gives a boolean value 
  // console.log("theme", theme);

  return (
     <div id="app" >
      <NavBar />
      <Header theme={theme.matches}/>
      <ProjectCard theme={theme.matches}/>
      <ExperienceCard />
      <About />
      <Contact />
    </div>
  );
}

export default App;

// TODO have fake drop down with a down or up arrow, when clicked, change state, ternary to see if arrow is up or down, display card or a bar with component title
// TODO add data-theme="dark" to top element, have onclick to change it
// TODO depending on the theme, change classnames and display color for that theme
// TODO resize for mobile
// TODO make filter for tech stack