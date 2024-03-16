import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
function Projects() {
  return (
    <section className="project" id="projects">
      <h4 className="title-h4">Projects</h4>
      <h2 className="title-h2">
        My amazing <span className="text-color">work</span>
      </h2>
      <div className="project-container" id="projects">
        <Project3 />
        <Project1 />
        <Project2 />
      </div>
    </section>
  );
}

export default Projects;
