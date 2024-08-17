import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaruentMenu from "./components/RestaruentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery=lazy(()=>import("./components/Grocery"));
/***
 * Suspense is a component which is used to show a fallback component until the lazy component is loaded
 * Suspense takes one argument which is a fallback component
 * fallback component is the component which is shown until the lazy component is loaded
 * lazy is a function which is used to load the component lazily
 * lazy takes one argument which is a function which returns the import statement of the component
 * import statement is used to import the component
 * import statement takes one argument which is the path of the component
 * lazy means loading the component only when it is required
 * lazy is used to reduce the initial load time of the application
 * by using lazy it creates a separate bundle/js file for the component and loads it only when it is required
 * the component with lazy will not load when the application is loaded
 * it loads only when the component is required/accessed
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* //Outlet is a component which is used to render the child components of the parent component
      //Outlet is used to render the child components of the parent component based on the path
       */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading........</h1>}>
          <Grocery />
        </Suspense> ,
      },
      {
        path:"restaruent/:id",
        element:<RestaruentMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
