import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import PortfolioContent from "../Pages/PortfolioPage/PortfolioContent";
import PortfolioPage from "../Pages/PortfolioPage/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "portfolio", element: <PortfolioPage /> }
    ]
  },
  {
    path: "portfolio/:slug",
    element: <PortfolioContent />
  }
]);
