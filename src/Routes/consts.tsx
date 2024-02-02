import img from "../img/many-platypus-without-background.png";
import platypusVsMonkey from "../img/portfolio/platypus_vs_monkey.png";

export const projects = [
  {
    projectId: 1,
    projectName: "Platypus VS Monkey",
    description:
      "This game is based on my favorite board game, Gobblet Gobblers. For my React practice purpose, I made this game instead of Tic Tac Toe. In 2024, I reviewed my code again and re-wrote with TypeScript. ",
    img: platypusVsMonkey,
    src: "/platypus-vs-monkey/",
    githubPage: "https://nabetxan.github.io/platypus-vs-monkey/"
  },
  {
    projectId: 2,
    projectName: "My Next Project",
    description: "This is a cool Project",
    img: img,
    src: "/"
  },
  {
    projectId: 3,
    projectName: "My Next Next Project",
    description: "This is even cooler Project",
    img: img,
    src: "/"
  }
];

export const menuPages = [
  { page: "Home", src: "" },
  { page: "Portfolio", src: "portfolio" },
  { page: "About", src: "about" }
];
