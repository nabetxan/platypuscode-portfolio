import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.getElementById("container")?.offsetWidth;
      if (containerWidth && containerWidth > 600) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div id="container" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
      <header className="sticky top-0 z-10 shadow-md">
        <div id="title_logo" className="flex flex-row items-center">
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
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="">
            <div className="flex flex-row gap-3 items-center px-8 py-3">
              <img
                src={logo}
                id="logo"
                className="object-contain"
                alt="Platypus Code logo"
              />
              <h1 id="title">Platypus Code</h1>
            </div>
          </Link>
        </div>
        <div>
          <nav>
            <ul className="flex flex-row gap-10 justify-center">
              <li className="p-3">
                <Link to="">Home</Link>
              </li>
              <li className="p-3">
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li className="p-3">
                <Link to="about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer id="footer">©︎Platypus Code</footer>
    </div>
  );
}

export default App;
