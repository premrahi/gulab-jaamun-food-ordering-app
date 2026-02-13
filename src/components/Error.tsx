import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorHandler = () => {
  const err = useRouteError();

  let status = 500;
  let statusText = "something went wrong";

  if (isRouteErrorResponse(err)) {
    status = err.status;
    statusText = err.statusText;
  }

  return (
    <div className="error">
      <h1>Opps something went wrong</h1>
      <h2>
        {status}:{statusText}
      </h2>
      <h3>Halkuuu re please FIX IT!!!</h3>
    </div>
  );
};

export default ErrorHandler;
