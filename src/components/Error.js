import { useRouteError } from "react-router-dom";

const Error = () => {
  //useRouteError hook is used to get the error details
  //from the route that caused the error
  //It returns an object with status and statusText
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>{error.status + "  "+error.statusText}</h2>
    </div>
  );
};
export default Error;
