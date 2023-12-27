import manyPlatypus from "../../img/many-platypus-without-background.png";

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
      <section id="portfolio" className="wrapper">
        <h2 className="section-title">Portfolio</h2>
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
      <section id="about" className="wrapper">
        <h2 className="section-title">About</h2>
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

export default HomePage;
