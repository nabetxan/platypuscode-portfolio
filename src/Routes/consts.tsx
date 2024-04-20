import img from "../img/many-platypus-without-background.png";
import calculator from "../img/portfolio/calculator.png";
import platypusVsMonkey from "../img/portfolio/platypus_vs_monkey.png";

export const projects = [
  {
    projectId: 1,
    slug: "platypus-vs-monkey",
    projectName: "Platypus VS Monkey",
    description:
      "This game is based on my favorite board game, Gobblet Gobblers. For my React practice purpose, I made this game instead of Tic Tac Toe. In 2024, I reviewed my code again and re-wrote with TypeScript. ",
    img: platypusVsMonkey,
    src: "/platypus-vs-monkey/",
    githubPage: "https://nabetxan.github.io/platypus-vs-monkey/"
  },
  {
    projectId: 2,
    slug: "calculator",
    projectName: "Calculator",
    description:
      "This is a calculator web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. This calculator has a special feature of Euro to Japanese Yen Convertor.",
    img: calculator,
    src: "/calculator",
    githubPage: "https://nabetxan.github.io/calculator/"
  },
  {
    projectId: 3,
    slug: "tba",
    projectName: "My Next Project",
    description: "This is a cool Project",
    img: img,
    src: "/"
  }
];

export const menuPages = [
  { page: "Home", src: "" },
  { page: "Portfolio", src: "portfolio" },
  { page: "About", src: "about" }
];
