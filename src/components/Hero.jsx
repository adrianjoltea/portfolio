import image from "../images/peon.jpg";
import image1 from "../images/download.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h4>Hi, im Joltea Adrian </h4>
        <h1>
          I am an <span>Front-end Developer</span>
        </h1>
        <p>I can provide clean code and pixel perfect design</p>
        <a href="#projects">My Projects &rarr;</a>
      </div>
      <div className="hero-img">
        <img src={image1} alt="ciava" />
      </div>
    </section>
  );
}

export default Hero;
