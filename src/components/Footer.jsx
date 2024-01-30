import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-containers">
        <h4>My info</h4>
        <ul className="footer-containers-ul">
          <li>
            <a
              href="https://www.linkedin.com/in/joltea-adrian-6b8993268/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adrianjoltea"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-containers">
        <h4>My Contact</h4>
        <ul className="footer-containers-ul">
          <li>
            <p>jolteaadrian@gmail.com</p>
          </li>
          <li>
            <p>0759153833</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
