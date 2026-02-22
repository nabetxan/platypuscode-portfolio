import { Link } from "react-router-dom";
import { projects } from "../../Routes/consts";

const PortfolioPage = function () {
  return (
    <div>
      <div className="text-4xl my-9 h-full">Portfolio Page</div>
      <div className="portfolio-page-item-list">
        {projects.map((p, i) => (
          <div key={i} className="portfolio-page-item-container">
            <Link to={`${p.slug}`}>
              <img
                src={p.img}
                className="portfolio-page-item-img object-fit"
              ></img>
            </Link>
            <div className="w-[100%]">
              <Link to={`${p.slug}`}>
                <div className="text-start mb-4">
                  Title:{" "}
                  <span className="text-3xl ml-4 tracking-tighter">
                    {p.projectName}
                  </span>
                </div>
              </Link>
              <div className="text-left text-xl leading-relaxed">
                {p.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
