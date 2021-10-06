import ProjectFour from "./Projects/ProjectFour";
import ProjectOne from "./Projects/ProjectOne";
import ProjectThree from "./Projects/ProjectThree";
import ProjectTwo from "./Projects/ProjectTwo";

const Projects = () => {
  return (
    <div>
      <div className="proyectos-title section">
        <h2>PROYECTOS</h2>
      </div>
      <div className="proyectos-content content-style">
        <div className="carousel-style">
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
          <ProjectFour />
        </div>
      </div>
    </div>
  );
};

export default Projects;
