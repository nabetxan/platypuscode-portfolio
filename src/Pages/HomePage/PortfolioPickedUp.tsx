import { Link } from "react-router-dom";
import { projects } from "../../Routes/consts";

const PortfolioPickedUp = function () {
  return (
    <div>
      <section id="portfolio" className="wrapper">
        <h2 className="section-title">
          <Link to="portfolio">Portfolio</Link>
        </h2>
        <ul>
          {projects.map((p) => (
            <li className="portfolio-item" key={p.projectName}>
              <Link to={`portfolio/${p.projectId}`}>
                <img
                  src={p.img}
                  alt={p.projectName}
                  className="object-cover h-[300px]"
                ></img>
                <h3 className="content-title text-xl my-4">{p.projectName}</h3>
                <p className="truncate">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PortfolioPickedUp;
