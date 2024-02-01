import img1 from "../images/project-2.jpg";
import { FaCode, FaGithub } from "react-icons/fa";
function Project2() {
  return (
    <>
      <div className="project-container-1">
        <div className="image-position">
          <div className="image-project">
            <img src={img1} alt="Project 2" />
          </div>
        </div>
        <div>
          <h5>Recipe App</h5>
          <p>An website created in 24h during an hackathon</p>

          <div className="btn-container">
            <a
              href="https://github.com/adrianjoltea/christmas-recipe-app"
              className="btn-container-project"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Git-Hub
            </a>
            <a
              href="https://christmas-recipe-app.netlify.app"
              className="btn-container-project"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode /> Live
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project2;
