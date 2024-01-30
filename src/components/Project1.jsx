import img1 from "../images/project-1.jpg";
import { FaCode, FaGithub } from "react-icons/fa";
function Project1() {
  return (
    <>
      <div className="project-container-1">
        <img src={img1} alt="Project 1" className="image-project" />
        <div>
          <h5>Car Rental</h5>
          <p>
            A full-stack app created with react for the front-end and supabase
            as the backend
          </p>

          <div className="btn-container">
            <a
              href="https://github.com/adrianjoltea/car-rental"
              className="btn-container-project"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Git-Hub
            </a>
            <a
              href="https://car-rental-joltea.netlify.app"
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

export default Project1;
