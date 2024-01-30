import image from "../images/peon.jpg";
import image1 from "../images/download.png";

function AboutMe() {
  return (
    <section className="about-bkgrd">
      <div className="about" id="about">
        <div className="about-img">
          <img src={image1} alt="ciava" />
        </div>
        <div className="about-text">
          <h4 className="title-h4">About me</h4>
          <h2 className="title-h2">
            Adrian <span className="text-color">Joltea</span>
          </h2>
          <p>
            Hi, I&apos;m a passionate and detail-oriented junior React developer
            with a strong foundation in front-end web development. My journey
            into the world of coding began with a fascination for creating
            engaging and interactive user interfaces.
          </p>
          <p>
            I am enthusiastic about staying up-to-date with the latest industry
            trends and technologies. Eager to contribute my skills and learn
            from experienced developers to grow as a professional in the
            ever-evolving field of web development.
          </p>
          <ul>
            <li>React.js</li>
            <li>Javascript/ES6+</li>
            <li>HTML5</li>
            <li>CSS/SASS</li>
            <li>RESTful APIs</li>
            <li>Git</li>
            <li>State Management</li>
            <li>Responsive Design</li>
            <li>Supabase</li>
            <li>React Query</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
