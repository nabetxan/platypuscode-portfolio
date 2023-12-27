import { Link } from "react-router-dom";

const AboutPlatypusCodeSummary = function () {
  return (
    <div>
      <section id="about" className="wrapper">
        <h2 className="section-title">
          <Link to="about">About</Link>
        </h2>
        <div id="about-text" className="text-3xl px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nihil?
          Natus laborum aliquid possimus explicabo culpa a non ipsum
          necessitatibus tempora minus fugit vel exercitationem labore, maiores
          quasi, in sunt?
        </div>
      </section>
    </div>
  );
};

export default AboutPlatypusCodeSummary;
