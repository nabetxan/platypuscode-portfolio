import { useParams } from "react-router";
import { projects } from "../../Routes/consts";

const PortfolioContent: React.FC = function () {
  const { projectId } = useParams();
  const project = projects.find((p) => p.projectId.toString() === projectId);

  return (
    <>
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
