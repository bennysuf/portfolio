import About from "./About";
import Contact from "./Contact";
import NavBar from "./Nav";
import ProjectCard from "./projects/ProjectCard";
import ExperienceCard from "./experience/ExperienceCard";
import Header from "./Header";
import "@picocss/pico/css/pico.min.css";

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <NavBar />
      <Header />
      <ProjectCard />
      <ExperienceCard />
      <About />
      <Contact />
    </div>
  );
}

export default App;

// TODO have fake drop down with a down or up arrow, when clicked, change state, ternary to see if arrow is up or down, display card or a bar with component title
