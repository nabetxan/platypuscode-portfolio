import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";
import "./App.css";
import logo from "./img/logo.png";
import manyPlatypus from "./img/many-platypus-without-background.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div id="container" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
      <header className="sticky top-0 z-10 shadow-md">
        <div id="title_logo" className="flex flex-row gap-3 items-center">
          <IconButton
            id="menu-icon"
            className="sticky top-0 left-3 z-10"
            aria-label="menu"
            onClick={() => {
              setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            {isMenuOpen && (
              <div id="dropdown-menu">
                <ul>
                  <li>
                    <a href="">Portfolio</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a
            href="https://blog.platypuscode.com/"
            target="_blank"
            className="flex flex-row gap-3 items-center px-8 py-3"
          >
            <img
              src={logo}
              id="logo"
              className="object-contain"
              alt="Platypus Code logo"
            />

            <h1 id="title">Platypus Code</h1>
          </a>
        </div>
        <div>
          <nav>
            <ul className="flex flex-row gap-10 justify-center">
              <li className="p-3">
                <a href="https://blog.platypuscode.com/" target="_blank">
                  Portfolio
                </a>
              </li>
              <li className="p-3">
                <a href="https://blog.platypuscode.com/" target="_blank">
                  Blog
                </a>
              </li>
              <li className="p-3">
                <a href="https://blog.platypuscode.com/about/" target="_blank">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              nihil? Natus laborum aliquid possimus explicabo culpa a non ipsum
              necessitatibus tempora minus fugit vel exercitationem labore,
              maiores quasi, in sunt?
            </div>
          </section>
        </div>
      </main>
      <footer id="footer">©︎Platypus Code</footer>
    </div>
  );
}

export default App;
