import About from "./About";
import Contact from "./Contact";
import NavBar from "./Nav";
import ProjectCard from "./projects/ProjectCard";
import ExperienceCard from "./experience/ExperienceCard";
import "@picocss/pico/css/pico.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProjectCard />
      <ExperienceCard />
      <About />
      <Contact />
    </div>
  );
}

export default App;
