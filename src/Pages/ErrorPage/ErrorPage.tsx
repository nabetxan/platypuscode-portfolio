import { Button } from "@mui/material";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError
} from "react-router-dom";

const ErrorPage = function () {
  const error = useRouteError();
  const navigate = useNavigate();
  let errorMessage: string = "";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-7xl m-20">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        前のページに戻る
      </Button>
    </div>
  );
};

export default ErrorPage;
