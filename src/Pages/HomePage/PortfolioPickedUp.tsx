import { Link } from "react-router-dom";
import manyPlatypus from "../../img/many-platypus-without-background.png";

const PortfolioPickedUp = function () {
  return (
    <div>
      <section id="portfolio" className="wrapper">
        <h2 className="section-title">
          <Link to="portfolio">Portfolio</Link>
        </h2>
        <ul>
          <li className="portfolio-item">
            <img src={manyPlatypus} alt="テキストテキストテキスト"></img>
            <h3 className="content-title">タイトルタイトル</h3>
            <p>テキストテキストテキスト</p>
          </li>
          <li className="portfolio-item">
            <img src={manyPlatypus} alt="テキストテキストテキスト"></img>
            <h3 className="content-title">タイトルタイトル</h3>
            <p>テキストテキストテキスト</p>
          </li>
          <li className="portfolio-item">
            <img src={manyPlatypus} alt="テキストテキストテキスト"></img>
            <h3 className="content-title">タイトルタイトル</h3>
            <p>テキストテキストテキスト</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PortfolioPickedUp;
