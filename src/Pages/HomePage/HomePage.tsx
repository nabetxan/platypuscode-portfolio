import manyPlatypus from "../../img/many-platypus-without-background.png";
import AboutPlatypusCodeSummary from "./AboutPlatypusCodeSummary";
import PortfolioPickedUp from "./PortfolioPickedUp";

const HomePage = function () {
  return (
    <div className="p-8">
      <div id="mainvisual" className="flex flex-col items-center">
        <img
          src={manyPlatypus}
          id="manyPlatypus"
          alt="many Platypus in a box"
          className="my-5 p-3"
        />
      </div>
      <PortfolioPickedUp />
      <AboutPlatypusCodeSummary />
    </div>
  );
};

export default HomePage;
