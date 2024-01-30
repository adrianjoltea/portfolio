import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(nav => !nav);
  }

  return (
    <div className="nav">
      <h3 className="nav-h3">
        Adrian <span>Joltea</span>
      </h3>
      <ul className={`nav-ul ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#about" className="nav-links">
            About me
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-links">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-links">
            Contact
          </a>
        </li>
      </ul>
      <a href="#" onClick={handleClick} className="toggle-mobile">
        {isOpen ? <FaX /> : <GiHamburgerMenu />}
      </a>
    </div>
  );
}

export default Nav;
