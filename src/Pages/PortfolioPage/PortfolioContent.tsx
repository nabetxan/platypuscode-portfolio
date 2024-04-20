import { Button } from "@mui/material";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { projects } from "../../Routes/consts";

const PortfolioContent: React.FC = function () {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-2 left-4">
        <Button
          onClick={() => {
            navigate(-1);
          }}
          sx={{ color: "black" }}
        >
          戻る
        </Button>
      </div>
      {project ? (
        <div className="h-screen">
          <iframe
            src={project.githubPage ?? project.src}
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
      ) : (
        <div>No such project..</div>
      )}
    </>
  );
};

export default PortfolioContent;
