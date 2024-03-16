import img1 from "../images/img3.png";
import { FaCode, FaGithub } from "react-icons/fa";
function Project3() {
  return (
    <>
      <div className="project-container-1">
        <div className="image-position">
          <div className="image-project">
            <img src={img1} alt="Project 1" />
          </div>
        </div>
        <div>
          <h5>Personal Finance</h5>
          <p>
            A full-stack app created with react for the front-end and nest.js as
            the backend
          </p>

          <div className="btn-container">
            <a
              href="https://github.com/adrianjoltea/personal-finance"
              className="btn-container-project"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Git-Hub
            </a>
            <a
              href="https://personal-finance-adrian.netlify.app"
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

export default Project3;
