import { useRouteError } from "react-router-dom";

const Error = () => {
  // Use useRouteError hook to retrieve error details
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <h2 className="text-lg text-gray-800 mb-2">
        <span className="font-semibold">Status:</span> {error?.status} - {error?.statusText}
      </h2>
      {error?.data && (
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Details:</span> {error.data}
        </p>
      )}
      {error?.message && (
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Message:</span> {error.message}
        </p>
      )}
      {error?.stack && (
        <pre className="bg-gray-200 text-gray-700 p-4 rounded-md overflow-auto text-sm w-full max-w-2xl">
          <span className="font-semibold">Stack Trace:</span>
          <br />
          {error.stack}
        </pre>
      )}
    </div>
  );
};

export default Error;
